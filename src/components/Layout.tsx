import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { cursor } from "@/store/slices";
import { useAppDispatch } from "@/store/hooks";
import MenuControls from "./atoms/MenuControls";
import SmoothScroll from "./Animation/SSWrapper";
import HorizontalLine from "./atoms/HorizontalLines";
import { useState, useEffect } from 'react'
import { delay } from '@reduxjs/toolkit/dist/utils';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';
import useMobileDetect from '@/hooks/useMobileDetect';

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

const Layout = ({ children }: any) => {

    const router = useRouter();
    const isMobile = useMobileDetect()
    const [isMenuVisible, setMenuVisible] = useState(!true)
    const loadingTextAnimationControls = useAnimationControls()
    const [AnimeState, setAnimeState] = useState(true)


    const dispatch = useAppDispatch()
    const handleFocused = () => {
        dispatch(cursor('focused'))
    }
    const handleDefault = () => {
        dispatch(cursor('default'))
    }


    useEffect(() => {
        loadingTextAnimationControls.start({ y: "0%", opacity: 1 }, {
            duration: .8,
            ease: [0.25, 0.1, 0.25, 1],
        })

        const timer = setTimeout(() => {
            loadingTextAnimationControls.start({ y: "-110%", opacity: 0 }, {
                duration: .8,
                ease: [0.25, 0.1, 0.25, 1],
            })

            setTimeout(() => {
                setAnimeState(false)
            }, 1000)


        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);




    return (
        <>
            <AnimatePresence>
                {isMenuVisible && <MobileMenu {...{ isMenuVisible, setMenuVisible }} />}
            </AnimatePresence>

            <AnimatePresence>
                {AnimeState ? (
                    <motion.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="fixed z-50 top-0 left-0 w-full h-full bg-white dark:bg-black flex items-center justify-center">
                        <motion.div className='overflow-y-hidden'>
                            <motion.div
                                initial={{ y: "100%", opacity: 0 }}
                                animate={loadingTextAnimationControls}>
                                <p className='text-elg dark:text-white font-bold first-letter:capitalize '>{getRandomText()}</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ) : (
                    <div className="w-full h-full absolute top-0 left-0">
                        <HorizontalLine />
                        <MenuControls {...{
                            handleDefault,
                            handleFocused,
                            isMenuVisible,
                            setMenuVisible
                        }} />
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={router.route}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={{
                                    initial: { opacity: 0 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                }}

                            >
                                <SmoothScroll>
                                    <motion.div>{children}</motion.div>
                                </SmoothScroll>
                            </motion.div>
                        </AnimatePresence>

                    </div>)}
            </AnimatePresence>

        </>
    )
}
export default Layout




const MobileMenu = ({ isMenuVisible, setMenuVisible }: any) => {
    const { pathname } = useRouter()
    return (
        <motion.div
            style={{ height: "0px" }}
            animate={{ height: '100%', transition: { duration: 1 } }}
            exit={{ height: "0%", transition: { duration: 1, delay: 2 } }}

            className="bg-[#ececec] dark:bg-black  w-full  fixed lg:z-0 z-50  top-0 left-0 p-[24px] 4xl:p-[50px] 3xl:p-[50px] 2xl:p-[50px] xl:p-[25px] pt-[6rem]"
        >
            <motion.div className='mt-[10rem]'>

                <motion.div
                    className='bg-black'
                    style={{ height: 2, width: '0%' }}
                    animate={{ width: '100%', transition: { delay: 1, duration: .6 } }}
                    exit={{ width: '0%', transition: { delay: 1, duration: .6, ease: [1, 1, .70, .90], } }}
                >&nbsp;</motion.div>

                <motion.div className='mt-5'>
                    <Item {...{ setMenuVisible, isMenuVisible, showDelay: .8, hideDelay: 1.1, text: 'Home', active: pathname === '/', path: '/' }} />
                    <Item {...{ setMenuVisible, isMenuVisible, showDelay: .9, hideDelay: 1, text: 'About', active: pathname === '/about', path: '/about' }} />
                    <Item {...{ setMenuVisible, isMenuVisible, showDelay: 1, hideDelay: .9, text: 'Projects', active: pathname === '/projects', path: '/projects' }} />
                    <Item {...{ setMenuVisible, isMenuVisible, showDelay: 1.1, hideDelay: .8, text: 'Contact', active: false, onclick: () => { alert('') } }} />





                </motion.div>

                <ThemeToggle />



            </motion.div>
        </motion.div>
    )
}





const Item = ({ setMenuVisible, isMenuVisible, showDelay, hideDelay, text, active, path, onclick }: any) => {

    const { push } = useRouter()
    const animation = useAnimationControls()

    const handleClick = () => {
        setTimeout(() => {
            if (path) {
                push(path);
                setMenuVisible(false)
            } else {
                onclick();
                setMenuVisible(false)
            }
        }, 1000)
        animation.start({
            letterSpacing: '4px', color: '#4b6cc1', transition: {
                duration: 1
            }
        })
    }

    return (
        <motion.div onClick={handleClick} className='overflow-y-hidden'>
            <motion.div
                animate={{
                    y: "0%", opacity: 1, transition: {
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: showDelay,
                    }
                }}
                exit={{
                    y: "100%", opacity: 0, transition: {
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                        delay: hideDelay,
                    }
                }}
                initial={{ y: "100%", opacity: 0 }}
            >
                <motion.h1 animate={animation} style={active ? { color: '#4b6cc1' } : undefined} className="text-[2.5rem] font-semibold">{text}</motion.h1>
            </motion.div>
        </motion.div >
    )
}