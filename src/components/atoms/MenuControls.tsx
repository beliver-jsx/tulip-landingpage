import Link from 'next/link'
import LgMenu from '../LgMenu'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
const DynamicToggler = dynamic(() => import('../ThemeToggle'),
    { ssr: false })


const MenuControls = ({ handleDefault, handleFocused }: any) => (
    <div className="w-full h-full fixed top-0 left-0 p-[24px] 4xl:p-[50px] 3xl:p-[50px] 2xl:p-[50px] xl:p-[25px] grid grid-cols-2">
        <div>
            <Link href={'/'}>
                <motion.h5
                    onHoverEnd={handleDefault}
                    className=" cursor-pointer text-md"
                    onHoverStart={handleFocused}
                    whileHover={{ letterSpacing: '1px', color: '#4b6cc1' }}>Richard William's <br /> Portfolio</motion.h5>
            </Link>
        </div>

        <div>
            <DynamicToggler />
        </div>

        <div className="flex items-end w-full h-full">
            <LgMenu />
        </div>

        <div className="flex items-end justify-end w-full h-full">
            <Link href={'/'}>
                <motion.h5
                    onHoverEnd={handleDefault}
                    onHoverStart={handleFocused}
                    className=" cursor-pointer text-md hidden lg:block"
                    whileHover={{ letterSpacing: '3px', color: '#4b6cc1', fontWeight: "bold" }}>Available for work!</motion.h5>
            </Link>
        </div>
    </div>
)


export default MenuControls