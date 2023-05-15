import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { cursor } from "@/store/slices";
import { useAppDispatch } from "@/store/hooks";
import MenuControls from "./atoms/MenuControls";
import SmoothScroll from "./Animation/SSWrapper";
import HorizontalLine from "./atoms/HorizontalLines";
import { useState, useEffect } from 'react'


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

    const loadingTextAnimationControls = useAnimationControls()
    const loadingWrapperAnimationControls = useAnimationControls()
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
            duration: 1,
            ease: [1, 1, .70, .90],
        })


        const timer = setTimeout(() => {

            loadingTextAnimationControls.start({ y: "-110%", opacity: 0 }, {
                duration: .8,
                ease: [1, 1, .70, .90],
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
                {AnimeState ? <motion.div
                    transition={{ duration: 1.5 }}
                    exit={{ opacity: 0 }}
                    // animate={loadingWrapperAnimationControls}
                    className="fixed z-50 top-0 left-0 w-full h-full bg-white flex items-center justify-center">
                    <motion.div className='overflow-y-hidden'>
                        <motion.div
                            animate={loadingTextAnimationControls}
                            initial={{ y: "100%", opacity: 0 }}>
                            <p className='text-elg font-bold first-letter:capitalize '>The Paragraph Goes here..</p>
                        </motion.div>
                    </motion.div>
                </motion.div> : <div className="w-full h-full absolute top-0 left-0">
                    <HorizontalLine />
                    <MenuControls {...{
                        handleDefault,
                        handleFocused
                    }} />


                    <SmoothScroll>
                        <motion.div
                        // initial={{ opacity: 0, }}
                        // animate={{ opacity: 1, }}
                        // transition={{
                        //     delay: 2,
                        //     duration: 2
                        // }}
                        >{children}</motion.div>
                    </SmoothScroll>





                </div>}
            </AnimatePresence>




        </>
    )
}
export default Layout
