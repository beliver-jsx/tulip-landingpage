interface props {
    text: string,
    active?: boolean
    click: () => void,
}

import { motion } from 'framer-motion'
import { cursor } from "@/store/slices";
import { useAppDispatch } from "@/store/hooks";

export const LgMenuBtn: React.FC<props> = ({ click, text, active }) => {
    const dispatch = useAppDispatch()
    const handleFocused = () => {
        dispatch(cursor('focused'))
    }
    const handleDefault = () => {
        dispatch(cursor('default'))
    }
    const hoverStyle = { letterSpacing: '5px', color: '#4b6cc1', fontWeight: '700' }
    return (
        <motion.button
            onClick={click}
            onHoverEnd={handleDefault}
            onHoverStart={handleFocused}
            initial={active ? hoverStyle : {}}
            className="text-left text-md font-semibold capitalize w-max"
            whileHover={hoverStyle}>{text}</motion.button>
    )
}

