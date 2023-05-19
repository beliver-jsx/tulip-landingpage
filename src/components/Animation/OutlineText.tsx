interface props {
    text: string,
    classNames?: string,
    onClick?: any
}

import { cursor } from "@/store/slices"
import { useAppDispatch } from "@/store/hooks"
import { motion, useAnimationControls } from "framer-motion"

const OutlineText: React.FC<props> = ({
    text, classNames, onClick
}) => {
    const dispatch = useAppDispatch()

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
            onTouchEnd={handleInnerMouseLeave}
            onMouseEnter={handleInnerMouseEnter}
            onMouseLeave={handleInnerMouseLeave}
            onTouchStart={handleInnerMouseEnter}>
            <motion.h3
                animate={simpleTextControl}
                className={`tracking-wider ${classNames}`}
                initial={{ opacity: 1 }}>{text}</motion.h3>
            <motion.h3
                animate={OutlineTextControl}
                className={`absolute outline-text  tracking-wider ${classNames}`}
                initial={{ opacity: 1 }}>{text}</motion.h3>
        </motion.div>

    )
}
export default OutlineText