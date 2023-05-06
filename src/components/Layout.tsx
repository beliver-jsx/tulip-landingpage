import LgMenu from "./LgMenu"
import { motion } from 'framer-motion'
import ThemeToggle from "./ThemeToggle"
import { cursor } from "@/store/slices";
import SmoothScroll from "./SmoothScroller";
import { useAppDispatch } from "@/store/hooks";

const Layout = ({ children }: any) => {
    const dispatch = useAppDispatch()
    const handleFocused = () => {
        dispatch(cursor('focused'))
    }
    const handleDefault = () => {
        dispatch(cursor('default'))
    }
    return (
        <div className='grid grid-cols-[300px_auto_300px]' >
            <aside className="border-r-[1px] border-[#ffffff29]">
                <div className="w-[300px] h-[100%] fixed top-0 left-0 flex flex-col p-[47px]">
                    <motion.h5 onHoverStart={handleFocused} onHoverEnd={handleDefault} whileHover={{ letterSpacing: '1px', color: '#4b6cc1' }} className=" cursor-pointer" >Richard William's <br /> Portfolio</motion.h5>
                    <LgMenu />
                </div>
            </aside>
            <div>
                <SmoothScroll>
                    <div>{children}</div>
                </SmoothScroll>
            </div>
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