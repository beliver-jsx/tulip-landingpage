interface props {
    next: project['next'],
    previous: project['previous'],
}


import React from 'react'
import { project } from '@/type'
import { cursor } from "@/store/slices"
import { useRouter } from 'next/router'
import { useAppDispatch } from "@/store/hooks"
import { motion, useAnimationControls } from "framer-motion"

const ProjectFooter: React.FC<props> = ({ next, previous }) => {
    return (
        <footer>
            <section className='flex flex-col md:flex-row'>
                {previous && <Previous {...previous} />}
                {next && <Next {...next} />}
            </section>

            <section className='flex  items-center justify-between py-[5rem]'>
                <p className='text-md text-gray'>© 2023 - Richard William</p>
                <p className='text-md text-gray'>Made with blue-heart by William</p>
            </section>

        </footer>)
}

// Sub Components;

const Next = ({ name, href }: { name: string, href: string }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const simpleTextControl = useAnimationControls()
    const OutlineTextControl = useAnimationControls()
    const trackingTextControl = useAnimationControls()

    const handleInnerMouseEnter = () => {
        dispatch(cursor('focused'))
        OutlineTextControl.start({ opacity: 0 }, { duration: .4 })
        trackingTextControl.start({
            letterSpacing: '4px',
            color: '#4b6cc1',
            fontWeight: 700,
        })

    }
    const handleInnerMouseLeave = () => {
        dispatch(cursor('default'))
        OutlineTextControl.start({ opacity: 1 }, { duration: .4 })
        trackingTextControl.start({
            letterSpacing: '1px',
            color: 'gray',
            fontWeight: 500,
        })
    }

    const handleClick = () => {
        router.push(href)
    }

    return (
        <div className='grid md:justify-end cursor-pointer flex-1'
            onMouseEnter={handleInnerMouseEnter}
            onMouseLeave={handleInnerMouseLeave}
            onClick={handleClick}
        >
            <motion.div
                className='flex relative'
            >
                <motion.h3
                    className={`tracking-wider  
                    
                    4xl:text-h2-4xl
                        3xl:text-h2-3xl
                        2xl:text-h2-2xl
                        xl:text-h2-xl
                        lg:text-h2-lg
                        md:text-h2-md
                        text-h2-sm


                        
            
                        !font-extrabol
                    
                    `}
                    animate={simpleTextControl}>Next</motion.h3>
                <motion.h3
                    className={`absolute outline-text  tracking-wider 
                    
                    4xl:text-h2-4xl
                        3xl:text-h2-3xl
                        2xl:text-h2-2xl
                        xl:text-h2-xl
                        lg:text-h2-lg
                        md:text-h2-md
                        text-h2-sm



                        !font-extrabold
                    
                    `}
                    animate={OutlineTextControl}>Next</motion.h3>
            </motion.div>

            <motion.h5
                animate={trackingTextControl}
                className='text-lg text-gray capitalize md:text-right'
            >{name} →</motion.h5>
        </div>
    )
}


const Previous = ({ name, href }: { name: string, href: string }) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const simpleTextControl = useAnimationControls()
    const OutlineTextControl = useAnimationControls()
    const trackingTextControl = useAnimationControls()

    const handleInnerMouseEnter = () => {
        dispatch(cursor('focused'))
        OutlineTextControl.start({ opacity: 0 }, { duration: .4 })
        trackingTextControl.start({
            letterSpacing: '4px',
            color: '#4b6cc1',
            fontWeight: 700,
        })
    }

    const handleInnerMouseLeave = () => {
        dispatch(cursor('default'))
        OutlineTextControl.start({ opacity: 1 }, { duration: .4 })
        trackingTextControl.start({
            letterSpacing: '1px',
            color: "gray",
            fontWeight: 500,
        })
    }

    const handleClick = () => {
        router.push(href)
    }
    return (
        <div
            className='cursor-pointer flex-1'
            onClick={handleClick}
            onMouseEnter={handleInnerMouseEnter}
            onMouseLeave={handleInnerMouseLeave}>
            <motion.div
                className='flex  relative'
            >
                <motion.h3
                    className={`tracking-wider  
                    
                    4xl:text-h2-4xl
                        3xl:text-h2-3xl
                        2xl:text-h2-2xl
                        xl:text-h2-xl
                        lg:text-h2-lg
                        md:text-h2-md
                        text-h2-sm

                        !font-extrabold
                    
                    `}
                    animate={simpleTextControl}>Previous</motion.h3>
                <motion.h3
                    className={`absolute outline-text  tracking-wider 
                    
                    4xl:text-h2-4xl
                        3xl:text-h2-3xl
                        2xl:text-h2-2xl
                        xl:text-h2-xl
                        lg:text-h2-lg
                        md:text-h2-md
                        text-h2-sm


                        
            
                        !font-extrabold
                    
                    `}
                    animate={OutlineTextControl}>Previous</motion.h3>
            </motion.div>

            <motion.h5
                animate={trackingTextControl}
                className='text-lg text-gray capitalize '
            >← {name}</motion.h5>
        </div>
    )
}


export default ProjectFooter