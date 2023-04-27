import { motion } from 'framer-motion'


interface props {
    text: string,
    wide: number,
    className?: string,
    handleClick?: () => void
}

const TrackingText: React.FC<props> = ({ text, wide, className, handleClick }) => {
    return (
        <motion.p onClick={handleClick} className={className} >{text}</motion.p>
    )
}
export default TrackingText