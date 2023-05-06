import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

import useMouse from "@react-hook/mouse-position";
import Skew from "./Skew";



import {
    useViewportScroll,
    useAnimationFrame,
    useScroll,
    useTransform,
    useSpring,
    motion,
    useMotionValue
} from "framer-motion";
import { useAppSelector } from "@/store/hooks";



interface props {
    children: any
}




const SmoothScroll: React.FC<props> = ({ children }) => {



    // scroll container
    const scrollRef = useRef<HTMLDivElement>(null);

    // page scrollable height based on content length
    const [pageHeight, setPageHeight] = useState(0);

    // update scrollable height when browser is resizing
    const resizePageHeight = useCallback((entries: any) => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    // observe when browser is resizing
    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizePageHeight(entries)
        );
        scrollRef && resizeObserver.observe(scrollRef.current as HTMLDivElement);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    const s = useScroll(); // measures how many pixels user has scrolled vertically
    const transform = useTransform(s.scrollY, [0, pageHeight], [0, -pageHeight]);
    const physics = { damping: 12, mass: 0.17, stiffness: 30 } // easing of smooth scroll
    const spring = useSpring(transform, physics); // apply easing to the negative scroll value


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


    const varients = {
        focused: {
            width: '50px',
            height: '50px',
            top: mousePos.y,
            left: mousePos.x,
            background: '#4b6dc1c4',
            transition: {
                type: "ease",
                mass: 0.17
            }
        },
        def: {
            width: '20px',
            height: '20px',
            top: mousePos.y,
            left: mousePos.x,
            background: '#4b6cc1',
            transition: {
                type: "ease",
                mass: 0.17
            }
        }
    }






    return (
        <div >
            <motion.div

                animate={cursor == 'default' ? varients.def : varients.focused}
                className="circle z-40 fixed rounded-full "
            >
            </motion.div>
            <motion.div
                ref={scrollRef}
                style={{
                    y: spring,
                }}

                className="fixed w-[1200px]  top-0 left-[300px] h-max"
            >

                <Skew>

                    {children}


                </Skew>


            </motion.div >
            <div style={{ height: pageHeight }} />
        </div >
    );
};

export default SmoothScroll;
