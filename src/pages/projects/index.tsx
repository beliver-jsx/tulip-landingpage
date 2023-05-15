import Divider from '@/components/atoms/Divider'
import BackToTop from '@/components/atoms/BackToTop'
import { motion, AnimatePresence } from 'framer-motion'
import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'
import ProjectListItem from '@/components/atoms/Project'


import data from '../../projects.json'

const listVariants = {
    visible: {
        transition: {
            staggerChildren: 0.2 // Set the delay between items
        }
    }
};


const List = () => {
    return (
        <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden">
            {data.map((item, index) => <ProjectListItem item={item} index={index} />)}
        </motion.ul>
    );
};

export default function Home() {
    return (
        <div>
            <TextRevealAnimation classNames='lg:my-[10rem] my-[5rem]' lines={['Selected', 'Works']} />
            <AnimatePresence>
                <List />
            </AnimatePresence>
            <Divider />
            <BackToTop />
        </div>
    )
}