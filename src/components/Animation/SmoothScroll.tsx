import Skew from "../Skew"
import ResizeObserver from "resize-observer-polyfill"
import useMobileDetect from "@/hooks/useMobileDetect"
import { useTransform, useSpring, motion, useScroll } from "framer-motion"
import React, { useRef, useState, useCallback, useLayoutEffect } from "react"
import HorizontalLine from "../atoms/HorizontalLines"
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

    return (
        <>
            <HorizontalLine />
            <motion.div
                ref={scrollRef}
                style={{ y: isMobile ? transform : spring }}
                className="fixed 
                4xl:w-[calc(100%-600px)]
                 3xl:w-[calc(100%-500px)]
                  2xl:w-[calc(100%-400px)]
                   xl:w-[calc(100%-352px)]
                    lg:w-[calc(100%-352px)]
                     md:w-[calc(100%-96px)]
                      w-[calc(100%-48px)]
                       4xl:left-[300px]
                        3xl:left-[250px]
                         2xl:left-[200px]
                          xl:left-[176px]
                           lg:left-[176px]
                            md:left-[48px] 
                            left-[24px] top-0 h-max">
                {!isMobile ? <Skew>{children}</Skew> : children}
            </motion.div>
            <div style={{ height: pageHeight }} />
        </>
    )
}

export default SmoothScroll
