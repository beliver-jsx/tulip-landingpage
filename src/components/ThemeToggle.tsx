import { motion } from 'framer-motion'
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'
const ThemeToggle = () => {

    const { theme, setTheme } = useTheme()

    const toggleSwitch = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    };

    return (
        <div className='flex justify-end'>
            <div className="switch" data-isOn={theme === 'dark'} onClick={toggleSwitch}>
                <motion.div className="handle bg-black dark:bg-white" layout transition={spring} />
            </div>

        </div>
    )
}
export default ThemeToggle

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};