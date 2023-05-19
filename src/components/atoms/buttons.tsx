interface props {
    text: string,
    active?: boolean
    click: () => void,
}

import { motion } from 'framer-motion'
import { cursor } from "@/store/slices";
import { useAppDispatch } from "@/store/hooks";
export const MenuButton: React.FC<props> = ({ click, text, active }) => {
    const dispatch = useAppDispatch()
    const hoverProp = { letterSpacing: '5px', color: '#4b6cc1', fontWeight: '700' }
    const handleFocused = () => {
        dispatch(cursor('focused'))
    }
    const handleDefault = () => {
        dispatch(cursor('default'))
    }
    return (
        <motion.button
            onClick={click}
            onTouchEnd={handleDefault}
            onHoverEnd={handleDefault}
            onHoverStart={handleFocused}
            onTouchStart={handleFocused}
            style={active ? hoverProp : {}}
            className="text-left text-md font-semibold capitalize w-max cursor-pointer text-black dark:text-white 
            hover:tracking-[5px] hover:text-blue hover:text-bold transition-all duration-500"
        >{text}</motion.button>
    )
}

