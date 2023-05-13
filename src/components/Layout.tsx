import { cursor } from "@/store/slices";
import SmoothScroll from "./SmoothScroller";
import { useAppDispatch } from "@/store/hooks";
import MenuControls from "./atoms/MenuControls";
import HorizontalLine from "./atoms/HorizontalLines";

const Layout = ({ children }: any) => {
    const dispatch = useAppDispatch()
    const handleFocused = () => {
        dispatch(cursor('focused'))
    }
    const handleDefault = () => {
        dispatch(cursor('default'))
    }

    return (
        <div className="w-full h-full fixed top-0 left-0 ">
            <HorizontalLine />
            <MenuControls {...{
                handleDefault,
                handleFocused
            }} />
            <SmoothScroll>
                <div>{children}</div>
            </SmoothScroll>
        </div>
    )
}
export default Layout
