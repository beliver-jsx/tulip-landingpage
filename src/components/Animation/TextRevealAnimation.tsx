interface props {
    lines: string[],
    classNames?: string
}

import { useEffect } from 'react';
import { useAnimate, stagger, motion } from "framer-motion";

const TextRevealAnimation: React.FC<props> = ({ lines, classNames }) => {
    const [scope, animate] = useAnimate();
    useEffect(() => {
        const staggerMenuItems = stagger(0.2, { startDelay: 0.15, ease: 'easeInOut' });
        animate('section', { y: 0 }, {
            duration: .8,
            delay: staggerMenuItems
        })
    }, [])
    return (
        <motion.div className={classNames} ref={scope}>
            {
                lines.map((line) => (
                    <div className='overflow-y-hidden'>
                        <motion.section id={'animation'}
                            initial={{ y: '100%' }}
                            className='text-xl'>
                            {line}
                        </motion.section>
                    </div>
                )
                )
            }
        </motion.div>
    )
}
export default TextRevealAnimation