import { motion } from 'framer-motion'
import { useState } from "react";

const ThemeToggle = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <div className='flex justify-end'>



            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
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