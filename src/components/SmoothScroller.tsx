import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    useViewportScroll,
    useAnimationFrame,
    useScroll,
    useTransform,
    useSpring,
    motion,
    useMotionValue
} from "framer-motion";
import { type } from "os";



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


    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
    // ... based on current scroll position to translateY the document in a natural way
    const transform = useTransform(s.scrollY, [0, pageHeight], [0, -pageHeight]);
    const physics = { damping: 10, mass: 0.17, stiffness: 55 } // easing of smooth scroll
    const spring = useSpring(transform, physics); // apply easing to the negative scroll value



    // const [direction, setDirection] = useState<'up' | 'down '>('up')
    // const [isScrolling, setScrolling] = useState(false)



    return (
        <>
            <motion.div
                ref={scrollRef}
                style={{
                    y: spring,
                    // skewY: direction === 'up' ? 5 : -5



                }} // translateY of scroll container using negative scroll value
                className="fixed px-[300px]"

                onWheel={(event) => {
                    // event.deltaY

                    // const { deltaY } = event
                    // const direName = deltaY < 1 ? 'up' : 'down'

                    // setDirection(direName as any)

                }}



            >
                {children}
            </motion.div >
            {/* blank div that has a dynamic height based on the content's inherent height */}
            {/* this is neccessary to allow the scroll container to scroll... */}
            {/* ... using the browser's native scroll bar */}
            <div style={{ height: pageHeight }} />
        </>
    );
};

export default SmoothScroll;
