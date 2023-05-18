import React, { useEffect, useRef, useState } from "react";

import useWindowSize from "@/hooks/useWindowSize";
interface props {
    children: any
}

const Skew: React.FC<props> = ({ children }) => {
    const size = useWindowSize() as any;

    // Ref for parent div and scrolling div
    const scrollContainer = useRef<any>(null);

    // Configs
    const data = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    };

    // Run scrollrender once page is loaded.
    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

    //set the height of the body.
    useEffect(() => {
        setBodyHeight();
    }, [size?.height]);

    //Set the height of the body to the height of the scrolling div
    const setBodyHeight = () => {
        document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
            }px`;
    };

    // Scrolling
    const skewScrolling = () => {
        if (typeof window !== 'undefined') {
            //Set Current to the scroll position amount
            data.current = window?.scrollY;
            // Set Previous to the scroll previous position
            data.previous += (data.current - data.previous) * data.ease;
            // Set rounded to
            data.rounded = Math.round(data.previous * 100) / 100;

            // Difference between
            const difference = data.current - data.rounded;
            const acceleration = difference / size.width;
            const velocity = +acceleration;
            const skew = velocity * 15;

            //Assign skew and smooth scrolling to the scroll container
            if (scrollContainer.current) {
                scrollContainer.current.style.transform = `skewY(${skew}deg)`;
            }

            //loop vai raf
            requestAnimationFrame(() => skewScrolling());
        }
    };
    return (
        <div


            ref={scrollContainer}

        // className="scroll "


        >
            {children}
        </div>
    );
}




export default Skew