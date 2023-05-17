interface props {
    lines: string[],
    classNames?: string
}
import { motion } from "framer-motion";

const TextRevealAnimation: React.FC<props> = ({ lines, classNames }) => {
    return (
        <motion.div
            className={classNames}>

            {
                lines.map((line, index) => (
                    <motion.div key={index} style={{ overflow: 'hidden', maxHeight: "100%", marginBottom: '1rem' }}>
                        <motion.div
                            style={{ y: 300, opacity: 0 }}
                            animate={{
                                y: 0, opacity: 1, transition: {
                                    delay: index == 0 ? 0 : (index + 0.2) * 0.1,
                                    type: 'spring',
                                    stiffness: 80,
                                    damping: 25,
                                }
                            }}

                            initial={{ opacity: 1 }}>
                            <h1 className="4xl:text-xl 3xl:text-[112px] 2xl:text-[112px] xl:text-[96px] lg:text-[96px] md:text-[80px] text-[52px] font-[800]">{line}</h1>
                        </motion.div>

                    </motion.div>
                ))
            }

        </motion.div>
    )
}
export default TextRevealAnimation




