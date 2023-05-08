import Divider from '@/components/atoms/Divider'
import BackToTop from '@/components/atoms/BackToTop'
import { motion, AnimatePresence } from 'framer-motion'
import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { cursor } from '@/store/slices'
import { useState } from 'react'
import ProjectListItem from '@/components/atoms/Project'

const projects = [{
    name: 'Portfolio',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1683014221663-a99a4de08a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
},
{
    name: 'Twitter',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1683289194638-cc26a0df737a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
},
{
    name: 'Facebook',
    year: '2020',
    image: 'https://images.unsplash.com/photo-1683009427598-9c21a169f98f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
}
]



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
            {projects.map((item, index) => <ProjectListItem item={item} index={index} />)}
        </motion.ul>
    );
};

export default function Home() {
    return (
        <div>
            <TextRevealAnimation classNames='mb-[10rem]' lines={['Selected', 'Works']} />
            <AnimatePresence>
                <List />
            </AnimatePresence>
            <Divider />
            <BackToTop />
        </div>
    )
}