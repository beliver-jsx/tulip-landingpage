import Menu from './Menu'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { hover_tracking_and_bold } from '@/animation'
const DynamicToggler = dynamic(() => import('../ThemeToggle'),
    { ssr: false })

import { useTheme } from 'next-themes'

const MenuControls = ({ handleDefault, handleFocused, isMenuVisible, setMenuVisible }: any) => {
    const { theme } = useTheme()
    return (
        (
            <div className="w-full lg:h-full fixed lg:z-0 z-[999999]  top-0 left-0 p-[24px] 4xl:p-[50px] 3xl:p-[50px] 2xl:p-[50px] xl:p-[25px] grid grid-cols-2">
                <div>
                    <Link href={'/'}>
                        <motion.h5
                            style={theme === 'light' ? { color: 'black' } : { color: 'white' }}
                            onHoverEnd={handleDefault}
                            className="cursor-pointer text-md"
                            onHoverStart={handleFocused}
                            whileHover={hover_tracking_and_bold}>Richard William's <br /> Portfolio</motion.h5>
                    </Link>
                </div>

                <div>
                    <DynamicToggler />
                    <MobileMenuToggleButton {...{ isMenuVisible, setMenuVisible }} />
                </div>

                <div className="hidden lg:flex items-end w-full h-full ">
                    <Menu />
                </div>

                <div className="hidden lg:flex items-end justify-end w-full h-full ">
                    <Link href={'/'}>
                        <motion.h5
                            onClick={() => { window.location.href = "mailto:someone @example.com" }}
                            onHoverEnd={handleDefault}
                            onHoverStart={handleFocused}
                            className=" cursor-pointer text-md hidden lg:block"
                            whileHover={{ letterSpacing: '3px', color: '#4b6cc1', fontWeight: "bold" }}>Available for work!</motion.h5>
                    </Link>
                </div>
            </div>
        )

    )
}
export default MenuControls


const MobileMenuToggleButton = ({ isMenuVisible, setMenuVisible }: any) => {
    const transition = {
        duration: .4
    }
    const animation = {
        top: { rotate: isMenuVisible ? 45 : 0 },
        bottom: {
            rotate: isMenuVisible ? -45 : 0,
            marginTop: isMenuVisible ? 0 : 5
        }
    }

    const handleClick = () => {
        setMenuVisible(!isMenuVisible)
        console.log('hey')
    }
    return (
        <div className='lg:hidden justify-end flex  '>
            <button
                className='p-5 pr-0'
                onClick={handleClick}>
                <motion.div
                    animate={animation.top}
                    transition={transition}
                    className='dark:bg-white bg-black h-[1px] w-[35px]'></motion.div>
                <motion.div
                    transition={transition}
                    animate={animation.bottom}
                    className='dark:bg-white bg-black h-[1px] w-[35px]'></motion.div>
            </button>
        </div>
    )
}