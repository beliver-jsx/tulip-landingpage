interface props {
    name: string,
    index: string
}
import { motion } from 'framer-motion'
import Parallax from "@/components/Parallax"
const Header: React.FC<props> = ({ name, index }) => {
    return (
        <header className="relative">
            <div className="h-screen w-full">
                <div className=" flex items-center font-bold  justify-center h-full text-[#80808034]">

                    <motion.div className='overflow-y-hidden flex items-center  h-[40rem]'>
                        <Parallax className="mt-[5rem]" offset={200}>
                            <motion.div
                                animate={{ y: "0%", opacity: 1 }}
                                initial={{ y: "100%", opacity: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [1, 1, .70, .90],
                                    delay: 0,
                                }}>
                                <h1 className="4xl:text-[40rem]  3xl:text-[112px] 2xl:text-[112px] xl:text-[96px] lg:text-[96px] md:text-[80px] text-[52px] font-[800]">{index}</h1>
                            </motion.div>
                        </Parallax>
                    </motion.div>

                </div>
            </div>
            <div className="h-screen w-full absolute top-0">
                <div className="text-xl flex items-center font-[800]  justify-center h-full text-black capitalize">
                    {name}
                </div>
            </div>
        </header>
    )
}
export default Header