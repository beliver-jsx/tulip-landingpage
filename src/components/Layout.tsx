import LgMenu from "./LgMenu"
import ThemeToggle from "./ThemeToggle"
import { useEffect, useRef } from "react"
import useWindowSize from "@/hooks/useWindowSize"
import SmoothScroll from "./SmoothScroller"
interface props {
    children: JSX.Element
}
const Layout: React.FC<props> = ({ children }) => {
    // //Hook to grab window size
    // const size = useWindowSize() as any;
    // // Ref for parent div and scrolling div
    // const scrollContainer = useRef<any>();

    // // Configs
    // const data = {
    //     ease: 0.1,
    //     current: 0,
    //     previous: 0,
    //     rounded: 0
    // };

    // // Run scrollrender once page is loaded.
    // useEffect(() => {
    //     requestAnimationFrame(() => skewScrolling());
    // }, []);

    // //set the height of the body.
    // useEffect(() => {
    //     setBodyHeight();
    // }, [size?.height]);

    // //Set the height of the body to the height of the scrolling div
    // const setBodyHeight = () => {
    //     document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height
    //         }px`;
    // };

    // // Scrolling
    // const skewScrolling = () => {
    //     if (typeof window !== 'undefined') {
    //         //Set Current to the scroll position amount
    //         data.current = window?.scrollY;
    //         // Set Previous to the scroll previous position
    //         data.previous += (data.current - data.previous) * data.ease;
    //         // Set rounded to
    //         data.rounded = Math.round(data.previous * 100) / 100;

    //         // Difference between
    //         const difference = data.current - data.rounded;
    //         const acceleration = difference / size.width;
    //         const velocity = +acceleration;
    //         const skew = velocity * 50;

    //         //Assign skew and smooth scrolling to the scroll container
    //         scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //         //loop vai raf
    //         requestAnimationFrame(() => skewScrolling());
    //     }
    // };

    return (
        <div
            className="grid grid-cols-[300px_auto_300px]  ">

            <aside className="border-r-[1px] border-[#ffffff29]">

                <div className="w-[300px] h-[100%] fixed top-0 left-0 flex flex-col p-[47px]">
                    <h5>Richard William's <br /> Portfolio</h5>
                    <LgMenu />
                </div>

            </aside>
            <SmoothScroll>
                {/* <div
                    // ref={scrollContainer}

                    className="text-xl hidescollbar "> */}
                {children}
                {/* </div> */}
            </SmoothScroll>


            <aside className="border-l-[1px] border-[#ffffff29]">
                <div className="w-[300px] h-[100%] fixed top-0 right-0 flex flex-col p-[47px]">
                    <ThemeToggle />
                    <h5 className="text-right mt-auto">Available for Work</h5>
                </div>
            </aside>
        </div>
    )
}

export default Layout