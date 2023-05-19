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
            style={active ? hoverStyle : {}}
            whileHover={hoverStyle}
            className="text-left text-md font-semibold capitalize w-max  cursor-pointer text-black dark:text-white"
        >{text}</motion.button>
    )
}

