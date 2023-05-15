import React, { useEffect } from 'react'
import { motion } from 'framer-motion'





const getRandomText = () => {
    function getDayName() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const dayIndex = currentDate.getDay();
        return days[dayIndex];
    }

    const welcome_texts = ['hold on second...', 'gettings it ready', `happy ${getDayName()}!`]
    const randomNumber = Math.floor(Math.random() * 4)
    return welcome_texts[randomNumber]
}

const LoadingScreen = () => {


    return (
        <div className="fixed top-0 left-0 w-full h-full bg-red-500-- flex items-center justify-center">
            <motion.div className='overflow-y-hidden'>
                <motion.div
                    animate={{ y: "0%", opacity: 1 }}
                    initial={{ y: "100%", opacity: 0 }}
                    transition={{
                        duration: 1,
                        ease: [1, 1, .70, .90],
                    }}>
                    <p className='text-elg font-bold first-letter:capitalize '>{getRandomText()}</p>

                </motion.div>
            </motion.div>
        </div>
    )
}

export default LoadingScreen