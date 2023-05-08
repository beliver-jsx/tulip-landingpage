
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
            onHoverEnd={handleHoverOut}>
            <motion.h3 className={`  ${classNames ? classNames : null}}`} animate={simpleTextControl}>{text}</motion.h3>
            <motion.h3 className={` absolute outline-text ${classNames ? classNames : null}}`} animate={OutlineTextControl}>{text}</motion.h3>
        </motion.div>
    )
}
export default OutlineToSimpleText