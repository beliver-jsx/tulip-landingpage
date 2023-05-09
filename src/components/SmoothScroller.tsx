import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

import useMouse from "@react-hook/mouse-position";
import Skew from "./Skew";



import {
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
    // const physics = { damping: 7, mass: 0.17, stiffness: 20 } // easing of smooth scroll


    const physics = {
        damping: 20,
        stiffness: 70,
        mass: 0.10,
    }



    const spring = useSpring(transform, physics); // apply easing to the negative scroll value

    // cursor state
    const cursor = useAppSelector(store => store.deafult.cursorState)

    // cursor position
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: any) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    };

    // handle mouse position;
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    const varients = {
        focused: {
            zIndex: -10,
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
            zIndex: -10,
            width: '20px',
            height: '20px',
            top: mousePos.y + -10,
            left: mousePos.x + -10,
            background: '#4b6cc1',
            transition: {
                type: "ease",
                mass: 0.17
            }
        }
    }






    return (
        <div>
            <motion.div
                animate={cursor == 'default' ? varients.def : varients.focused}
                className="circle z-40 fixed rounded-full">
            </motion.div>



            <motion.div
                ref={scrollRef}
                style={{
                    y: spring,
                }}


                className="fixed 
    4xl:w-[calc(100%-600px)]
    3xl:w-[calc(100%-500px)]
    2xl:w-[calc(100%-400px)]
    xl:w-[calc(100%-352px)]
    lg:w-[calc(100%-96px)]
    md:w-[calc(100%-96px)]
    w-[calc(100%-48px)]
        
    4xl:left-[300px]
    3xl:left-[250px]
    2xl:left-[200px]
    xl:left-[176px]
    lg:left-[48px]
    md:left-[48px]
    left-[24px]
                

            
                
                
                top-0  h-max"
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

