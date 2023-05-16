interface props {
    lines: string[],
    classNames?: string
}
import { motion } from "framer-motion";

const TextRevealAnimation: React.FC<props> = ({ lines, classNames }) => {
    const list = lines.map((line, index) => (
        <motion.div className='overflow-y-hidden '>
            <motion.div
                key={index}
                animate={{ y: "0%", opacity: 1 }}
                initial={{ y: "50%", opacity: 0 }}
                transition={{
                    duration: index == 0 ? .5 : 1,
                    ease: [0.08, 0.82, 0.17, 1],
                    delay: index == 0 ? 0 : 0.1 * index,
                }}>
                <h1 className="4xl:text-xl 3xl:text-[112px] 2xl:text-[112px] xl:text-[96px] lg:text-[96px] md:text-[80px] text-[52px] font-[800]">{line}</h1>
            </motion.div>
        </motion.div>
    ))
    return (
        // <motion.div
        //     className={classNames}
        //     transition={{ staggerChildren: 0.5 }}>
        //     {list}
        // </motion.div >



        <motion.div>

            {
                lines.map((line, index) => (
                    <motion.div key={index} style={{ overflow: 'hidden', maxHeight: "100%", marginBottom: '1rem' }}>
                        <motion.div
                            style={{ y: 300, opacity: 0 }}
                            animate={{
                                y: 0, opacity: 1, transition: {
                                    delay: index == 0 ? 0 : (index + 0.2) * 0.1,
                                    duration: .5,
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 25,
                                }
                            }}


                        >
                            <h1 className="text-xl">{line}</h1>
                        </motion.div>

                    </motion.div>
                ))
            }

        </motion.div>






    )
}
export default TextRevealAnimation




