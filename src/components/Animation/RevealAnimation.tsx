import { motion } from 'framer-motion'


const RevealAnimation = ({ children }: any) => {
    return (
        <motion.div
            animate={{ y: "0%" }}
            style={{ y: '100%' }}
            transition={{ duration: .5, delay: .2 }}>
            {children}
        </motion.div>
    )
}
export default RevealAnimation