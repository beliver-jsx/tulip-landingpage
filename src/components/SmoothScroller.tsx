interface props {
    children: any
}
import Skew from "./Skew";
import { useAppSelector } from "@/store/hooks";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useSpring, useTransform, } from "framer-motion";
import React, { useRef, useState, useCallback, useLayoutEffect, useEffect } from "react";

const SmoothScroll: React.FC<props> = ({ children }) => {

    const scrollRef = useRef<HTMLDivElement>(null);
    const [pageHeight, setPageHeight] = useState(0);
    const resizePageHeight = useCallback((entries: any) => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizePageHeight(entries)
        );
        scrollRef && resizeObserver.observe(scrollRef.current as HTMLDivElement);
        return () => resizeObserver.disconnect();
    }, [scrollRef, resizePageHeight]);

    const s = useScroll();
    const physics = { damping: 80, stiffness: 200, }
    const transform = useTransform(s.scrollY, [0, pageHeight], [0, -pageHeight]);
    const spring = useSpring(transform, physics);

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
            zIndex: 3,
            width: '60px',
            height: '60px',
            top: mousePos.y + -30,
            left: mousePos.x + -30,
            background: '#4b6dc17e',
            borderRadius: '100%',
            position: 'fixed',
            transition: {
                type: "ease",
                mass: 0.17
            }
        },
        def: {
            zIndex: 3,
            width: '20px',
            height: '20px',
            top: mousePos.y + -10,
            left: mousePos.x + -10,
            background: '#4b6cc1',
            borderRadius: '100%',
            position: 'fixed',
            transition: {
                type: "ease",
                mass: 0.17
            }
        }
    }

    return (
        <div>
            <motion.div
                style={{
                    pointerEvents: 'none'
                }}
                animate={cursor == 'default' ? varients.def : varients.focused as any}>
            </motion.div>

            <motion.div
                ref={scrollRef}
                style={{ y: spring }}
                className="fixed 4xl:w-[calc(100%-600px)] 3xl:w-[calc(100%-500px)] 2xl:w-[calc(100%-400px)] xl:w-[calc(100%-352px)] lg:w-[calc(100%-96px)] md:w-[calc(100%-96px)] w-[calc(100%-48px)] 4xl:left-[300px] 3xl:left-[250px] 2xl:left-[200px] xl:left-[176px] lg:left-[48px] md:left-[48px] left-[24px] top-0 h-max">
                <Skew>
                    {children}
                </Skew>
            </motion.div>

            <div style={{ height: pageHeight }} />

        </div >
    );
};

export default SmoothScroll;

