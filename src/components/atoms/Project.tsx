import { useState } from 'react'
import { cursor } from '@/store/slices'
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/store/hooks'
import RevealAnimation from '../Animation/RevealAnimation';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'

const LineVarient = {
    hidden: {
        width: '0%'
    },
    visible: {
        width: '100%',
        transition: {
            duration: 0.5 // Set the duration of the animation
        }
    }
};



const ProjectListItem = ({ index, item }: any) => {

    const { push } = useRouter()
    const dispatch = useAppDispatch()
    const [visible, setVisible] = useState(false)

    //Outer Layer Handler
    const handleMouseEnter = () => {
        setVisible(true)
    }
    const handleMouseLeave = () => {
        setVisible(!true)
    }

    const handleClick = () => {
        push('/')
    }


    // Inner Layer Text Controls
    const simpleTextControl = useAnimationControls()
    const OutlineTextControl = useAnimationControls()

    // Inner Layer Handlers

    const handleInnerMouseEnter = () => {
        dispatch(cursor('focused'))
        OutlineTextControl.start({ opacity: 0 }, { duration: .4 })
    }
    const handleInnerMouseLeave = () => {
        dispatch(cursor('default'))
        OutlineTextControl.start({ opacity: 1 }, { duration: .4 })
    }

    return (
        <motion.li
            id='outer-layer'
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='cursor-pointer overflow-hidden mb-6 z-10'>

            <div>
                <motion.div
                    variants={LineVarient}
                    className='relative'
                    style={{ height: '1px', background: 'white' }}>
                </motion.div>
            </div>

            <div className='flex justify-between text-gray mt-3'>
                <span>0{index + 1}</span>
                <span>{item.year}</span>
            </div>

            <div
                id='inner-layer'
                className='flex justify-between'
                onMouseEnter={handleInnerMouseEnter}
                onMouseLeave={handleInnerMouseLeave}>
                <RevealAnimation>
                    <motion.div
                        className='flex relative'>
                        <motion.h3
                            className='tracking-wider 4xl:text-elg 3xl:text-[75px] 2xl:text-[75px] xl:text-[70px] lg:text-[70px] md:text-[60px] text-[40px] font-bold'
                            animate={simpleTextControl}>{item.name}</motion.h3>
                        <motion.h3
                            className={`absolute outline-text  tracking-wider
                            
                                   
                        4xl:text-elg
                        3xl:text-[75px]
                        2xl:text-[75px]
                        xl:text-[70px]
                        lg:text-[70px]
                        md:text-[60px]
                        text-[40px]
                        font-bold
                            
                            
                            `}
                            animate={OutlineTextControl}>{item.name}</motion.h3>
                    </motion.div>
                </RevealAnimation>

                <AnimatePresence>
                    {visible && (
                        <motion.div
                            className='-z-10'
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .6 }}>
                            <img
                                src={item.image}
                                className='w-[600px] bg-red-500 h-[400px] absolute right-0 -z-1' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.li>
    )
}

export default ProjectListItem





