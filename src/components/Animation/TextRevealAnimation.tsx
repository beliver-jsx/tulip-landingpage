interface props {
    lines: string[],
    classNames?: string
}
import { motion } from "framer-motion";

const TextRevealAnimation: React.FC<props> = ({ lines, classNames }) => {
    return (
        <motion.div className={classNames} >
            {lines.map((line, index) => (
                <div className='overflow-y-hidden'>
                    <motion.div
                        key={index}
                        initial={{ y: "100%", opacity: .5 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "100%", opacity: .5 }}
                        transition={{
                            // type: "spring",  
                            // stiffness: index == 0 ? 170 : 100,
                            // damping: index == 0 ? 40 : 100,
                            // delay: index == 0 ? 0 : 0.1 * index,

                            type: "spring",
                            stiffness: index == 0 ? 100 : 50,
                            damping: index == 0 ? 40 : 20,
                            delay: index == 0 ? 0 : 0.3 * index,
                            duration: 2 - (index * 0.1)
                        }}
                    >
                        <h1 className="
                        
                        
                        
                        4xl:text-xl
                        3xl:text-[112px]
                        2xl:text-[112px]
                        xl:text-[96px]
                        lg:text-[96px]
                        md:text-[80px]
                        text-[52px]
                        
                        font-[800]



                        
                        
                        ">{line}</h1>
                    </motion.div>
                </div>
            ))}
        </motion.div>
    )
}
export default TextRevealAnimation

