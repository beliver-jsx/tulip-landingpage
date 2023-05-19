import { color, motion } from 'framer-motion'
import { useAppDispatch } from '@/store/hooks'
import { cursor } from '@/store/slices'
interface props {
    text: string,
    wide?: number,
    className?: string,
    handleClick?: () => void,
    inline?: boolean
}

const TrackingText: React.FC<props> = ({ text, wide, className, handleClick }) => {

    const dispatch = useAppDispatch()
    const handleHoverIn = () => {
        dispatch(cursor('focused'))
    }
    const handleHoverOut = () => {
        dispatch(cursor('default'))
    }

    return (
        <motion.p
            onTouchStart={handleHoverIn}
            onTouchEnd={handleHoverOut}
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            whileHover={{
                letterSpacing: '5px',
                color: '#4b6cc1',
                fontWeight: 'bold'
            }}
            onClick={handleClick}
            className={`${className} `}
        >{text}</motion.p>
    )
}
export default TrackingText