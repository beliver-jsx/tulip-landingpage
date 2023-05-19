
import { motion, useAnimationControls } from 'framer-motion'
interface props {
    text: string,
    classNames: string
}

const OutlineToSimpleText: React.FC<props> = ({ text, classNames }) => {
    const simpleTextControl = useAnimationControls()
    const OutlineTextControl = useAnimationControls()
    const handleHoverIn = () => {
        OutlineTextControl.start({ opacity: 0 }, { duration: .4 })
    }
    const handleHoverOut = () => {
        OutlineTextControl.start({ opacity: 1 }, { duration: .4 })
    }
    return (
        <motion.div
            className='flex relative'
            onHoverStart={handleHoverIn}
            onHoverEnd={handleHoverOut}
            onTouchStart={handleHoverIn}
            onTouchEnd={handleHoverOut}

        >
            <motion.h3 className={`  ${classNames ? classNames : 'text-xl'}}`} animate={simpleTextControl}>Email me!</motion.h3>
            <motion.h3 className={` absolute outline-text ${classNames ? classNames : 'text-xl'}}`} animate={OutlineTextControl}>Email me!</motion.h3>
        </motion.div>
    )
}
export default OutlineToSimpleText