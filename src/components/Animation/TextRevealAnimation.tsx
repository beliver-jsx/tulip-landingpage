interface props {
    lines: string[],
    classNames?: string,
    delay?: number
}
import { motion } from "framer-motion";
const TextRevealAnimation: React.FC<props> = ({ lines, classNames, delay }) => {



    return (
        <motion.div
            className={classNames}>

            {
                lines.map((line, index) => (
                    <motion.div className=" md:mb-[1rem] mb-0 overflow-hidden md:max-h-[100%] max-h-[70px] flex items-center " key={index}>
                        <motion.div
                            style={{ y: 300, opacity: 0 }}
                            animate={{
                                y: 0, opacity: 1,
                                transition: {
                                    delay: index == 0 ? (delay ? delay : 0) : (index + 0.2) * 0.1,
                                    duration: 2,
                                    ease: [0.87, 0, 0.13, 1]
                                }
                            }}

                            initial={{ opacity: 1 }}>
                            <h1 className={`" 4xl:text-h2-4xl 3xl:text-h2-3xl 2xl:text-h2-2xl xl:text-h2-xl lg:text-h2-lg md:text-h2-md text-h2-sm font-extrabold`}>{line}</h1>
                        </motion.div>

                    </motion.div>
                ))
            }

        </motion.div>
    )
}
export default TextRevealAnimation




