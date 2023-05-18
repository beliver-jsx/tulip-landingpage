import Skew from "../Skew"
import { useAppSelector } from "@/store/hooks"
import ResizeObserver from "resize-observer-polyfill"
import useMobileDetect from "@/hooks/useMobileDetect"
import { useTransform, useSpring, motion, useScroll } from "framer-motion"
import React, { useRef, useState, useEffect, useCallback, useLayoutEffect } from "react"

const SmoothScroll = ({ children }: any) => {
    // scroll container
    const scrollRef = useRef<any>(null)
    const isMobile = useMobileDetect()

    // page scrollable height based on content length
    const [pageHeight, setPageHeight] = useState(0)

    // update scrollable height when browser is resizing
    const resizePageHeight = useCallback((entries: any) => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height)
        }
    }, [])

    // observe when browser is resizing
    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver(entries =>
            resizePageHeight(entries)
        )
        scrollRef && resizeObserver.observe(scrollRef.current)
        return () => resizeObserver.disconnect()
    }, [scrollRef, resizePageHeight])

    const { scrollY } = useScroll() // measures how many pixels user has scrolled vertically
    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
    // ... based on current scroll position to translateY the document in a natural way
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
    const physics = { damping: 40, stiffness: 200, }  // easing of smooth scroll
    const spring = useSpring(transform, physics) // apply easing to the negative scroll value


    // Cursor Placement & Animation
    const cursor = useAppSelector(store => store.deafult.cursorState)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event: any) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);




    // mouse varients
    const varients = {
        focused: {
            zIndex: 1,
            width: '60px',
            height: '60px',
            top: mousePos.y + -30,
            left: mousePos.x + -30,
            background: '#4b6dc17e',
            transition: {
                type: "ease",
                mass: 0.17
            }
        },
        def: {
            zIndex: 1,
            width: '15px',
            height: '15px',
            top: mousePos.y + -7.5,
            left: mousePos.x + -7.5,
            background: '#4b6cc1',
            transition: {
                type: "ease",
                mass: 0.17
            }
        }
    }


    return (
        <>

            <motion.div
                style={{
                    pointerEvents: 'none'
                }}
                animate={cursor == 'default' ? varients.def : varients.focused}
                className="circle z-40 fixed rounded-full">
            </motion.div>

            <motion.div
                ref={scrollRef}
                style={{ y: isMobile ? transform : spring }} // translateY of scroll container using negative scroll value
                className="fixed 4xl:w-[calc(100%-600px)] 3xl:w-[calc(100%-500px)] 2xl:w-[calc(100%-400px)] xl:w-[calc(100%-352px)] lg:w-[calc(100%-96px)] md:w-[calc(100%-96px)] w-[calc(100%-48px)] 4xl:left-[300px] 3xl:left-[250px] 2xl:left-[200px] xl:left-[176px] lg:left-[48px] md:left-[48px] left-[24px] top-0 h-max "
            >
                {!isMobile
                    ? (<Skew>{children}</Skew>)
                    : (<div>{children}</div>)
                }
            </motion.div>
            {/* blank div that has a dynamic height based on the content's inherent height */}
            {/* this is neccessary to allow the scroll container to scroll... */}
            {/* ... using the browser's native scroll bar */}
            <div style={{ height: pageHeight }} />
        </>
    )
}

export default SmoothScroll
