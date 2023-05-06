import { motion } from 'framer-motion'
import { cursor } from "@/store/slices";
import { useAppDispatch } from "@/store/hooks";

export const LgMenuBtn: React.FC<{
    text: string,
    active?: boolean
    click: () => void,
}> = ({ click, text, active }) => {
    const dispatch = useAppDispatch()
    const handleFocused = () => {
        dispatch(cursor('focused'))
    }
    const handleDefault = () => {
        dispatch(cursor('default'))
    }

    const hoverStyle = { letterSpacing: '5px', color: '#4b6cc1' }

    return (
        <motion.button
            onClick={click}
            onHoverEnd={handleDefault}
            onHoverStart={handleFocused}
            initial={active ? hoverStyle : {}}
            className="text-left font-bold capitalize"
            whileHover={hoverStyle}>{text}</motion.button>
    )
}