interface props {
    lines: string[],
    classNames?: string
}
import { motion } from "framer-motion";

const TextRevealAnimation: React.FC<props> = ({ lines, classNames }) => {
    const list = lines.map((line, index) => (
        <motion.div className='overflow-y-hidden'>
            <motion.div
                key={index}
                animate={{ y: "0%", opacity: 1 }}
                initial={{ y: "100%", opacity: 0 }}
                transition={{
                    duration: 1,
                    ease: [1, 1, .70, .90],
                    delay: index == 0 ? 0 : 0.2 * index,
                }}>
                <h1 className="4xl:text-xl 3xl:text-[112px] 2xl:text-[112px] xl:text-[96px] lg:text-[96px] md:text-[80px] text-[52px] font-[800]">{line}</h1>
            </motion.div>
        </motion.div>
    ))
    return (
        <motion.div
            className={classNames}
            transition={{ staggerChildren: 0.5 }}>
            {list}
        </motion.div >
    )
}
export default TextRevealAnimation