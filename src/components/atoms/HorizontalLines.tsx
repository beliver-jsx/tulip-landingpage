import { motion } from 'framer-motion'

const HorizontalLine = () => (
    <div className=" transition-colors duration-1000 grid grid-cols-[1fr_1fr_1fr] w-full h-screen top-0 4xl:px-[300px] 3xl:px-[250px] 2xl:px-[200px] xl:px-[176px] lg:px-[48px] md:px-[48px] sm:px-[48px] fixed  ">

        <motion.div className="border-l border-t-0 border-b-0 border-r-0  border-2 border-[#00000010] dark:border-[#ffffff18]">&nbsp;</motion.div>

        <motion.div className="border-l border-t-0 border-b-0 border-r-0  border-2 border-[#00000010] dark:border-[#ffffff18]">&nbsp;</motion.div>

        <motion.div className="border-l border-t-0 border-b-0 border-r border-2 border-[#00000010] dark:border-[#ffffff18]">&nbsp;</motion.div>

    </div>
)

export default HorizontalLine