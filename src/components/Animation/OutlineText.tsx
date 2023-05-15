interface props {
    text: string,
    classNames?: string,
    onClick?: any
}


import { cursor } from "@/store/slices"
import { useAppDispatch } from "@/store/hooks"
import { SingleTarget, motion, useAnimate, useAnimationControls } from "framer-motion"
import { useTheme } from "next-themes"

const OutlineText: React.FC<props> = ({
    text, classNames, onClick
}) => {
    const dispatch = useAppDispatch()
    const { theme, setTheme } = useTheme()


    const simpleTextControl = useAnimationControls()
    const OutlineTextControl = useAnimationControls()


    const handleInnerMouseEnter = () => {
        dispatch(cursor('focused'))
        OutlineTextControl.start({ opacity: 0 }, { duration: .4 })


    }
    const handleInnerMouseLeave = () => {
        dispatch(cursor('default'))
        OutlineTextControl.start({ opacity: 1 }, { duration: .4 })
    }


    return (
        <motion.div
            onClick={onClick}
            className='flex relative'
            onMouseEnter={handleInnerMouseEnter}
            onMouseLeave={handleInnerMouseLeave}>
            <motion.h3
                className={`tracking-wider ${classNames}`}
                animate={simpleTextControl}>{text}</motion.h3>
            <motion.h3
                className={`absolute outline-text  tracking-wider ${classNames}`}
                animate={OutlineTextControl}>{text}</motion.h3>
        </motion.div>

    )
}
export default OutlineText