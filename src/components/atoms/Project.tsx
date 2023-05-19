

interface Props {
    index: number,
    item: any
}

import { useState } from "react"
import { useRouter } from "next/router"
import { cursor } from "@/store/slices"
import { useAppDispatch } from "@/store/hooks"
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion'



const ProjectListItem: React.FC<Props> = ({ index, item }) => {

    const text = {
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: "-100%" },
        initial: { opacity: 0, y: "100%" }
    }

    const line = {
        initial: { width: '0%' },
        animate: { width: '100%' },
    }

    const header = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    }

    const transitions = {
        text: {
            delay: index == 0 ? 10 : (index + 10) * .1,
            duration: 1.8,
            ease: [0.87, 0, 0.13, 1]
        },
        line: {
            delay: index == 0 ? 10 : (index + 10) * .1,
            duration: 1.8,
            ease: [0.87, 0, 0.13, 1]
        },

        header: {
            delay: index == 0 ? 10 : (index + 10) * .1,
        }
    }

    const { push } = useRouter()
    const dispatch = useAppDispatch()
    const [visible, setVisible] = useState(false)

    const handleMouseEnter = () => {
        setVisible(true)
    }
    const handleMouseLeave = () => {
        setVisible(!true)
    }
    const handleClick = () => {
        push(`projects/${item.name}`)
    }

    const simpleTextControl = useAnimationControls()
    const OutlineTextControl = useAnimationControls()

    const handleInnerMouseEnter = () => {
        dispatch(cursor('focused'))
        OutlineTextControl.start({ opacity: 0 }, { duration: .4 })
    }
    const handleInnerMouseLeave = () => {
        dispatch(cursor('default'))
        OutlineTextControl.start({ opacity: 1 }, { duration: .4 })
    }

    return (
        <motion.div
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            <motion.div
                variants={line}
                initial="initial"
                animate="animate"
                style={{ height: '1px' }}
                transition={transitions.line}
                className="bg-black">&nbsp;</motion.div>

            <motion.div
                animate="animate"
                initial="initial"
                variants={header}
                transition={transitions.header}
                className="flex items-center justify-between py-3">
                <span className="text-gray font-medium">0{index + 1}</span>
                <span className="text-gray font-medium">{item.year}</span>
            </motion.div>

            <section
                onMouseEnter={handleInnerMouseEnter}
                onMouseLeave={handleInnerMouseLeave} className="flex" >
                <motion.div className="overflow-y-hidden h-[100px] mb-4">
                    <motion.h1
                        exit={"exit"}
                        variants={text}
                        initial="initial"
                        animate="animate"
                        transition={transitions.text}
                        className="text-elg font-extrabold capitalize relative">

                        <motion.span animate={simpleTextControl} className="tracking-wider">{item.name}</motion.span>
                        <motion.span animate={OutlineTextControl} className="left-0 absolute outline-text  tracking-wider">{item.name}</motion.span>

                    </motion.h1>
                </motion.div>


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
                                className='w-[650px] bg-red-500 h-[400px] absolute right-0 -z-1' />
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

        </motion.div>
    )
}

export default ProjectListItem
