interface Props {
    heading: string,
    href: string,
    discription: string,
    first_image_url: string,
    second_image_url: string
}
import Parallax from "../Parallax"
import { cursor } from "@/store/slices"
import { useRouter } from "next/router"
import { useAppDispatch } from "@/store/hooks"
import { motion, useAnimationControls } from 'framer-motion'

const LargeTextWithImages: React.FC<Props> = ({
    href,
    heading,
    discription,
    first_image_url,

    second_image_url }) => {
    const { push } = useRouter()
    const dispatch = useAppDispatch()
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

    const handleClick = () => {
        push(`/projects/${href}`)
    }

    return (
        <div
            onClick={handleClick}
            onMouseEnter={handleInnerMouseEnter}
            onMouseLeave={handleInnerMouseLeave}
            className='py-[5rem] border-y-[1px] border-gray cursor-pointer'>
            <Parallax className="mt-[5rem] mb-[1rem]" offset={50}>
                <motion.div className='flex relative'>
                    <motion.h3 className=' tracking-wider 
            4xl:text-h2-4xl
            3xl:text-h2-3xl
            2xl:text-h2-2xl
            xl:text-h2-xl
            lg:text-h2-lg
            md:text-h2-md
            text-h2-sm

                    !font-extrabold capitalize
                    '
                        animate={simpleTextControl}>{heading}</motion.h3>
                    <motion.h3 className={` absolute outline-text tracking-wider 
                    
                    4xl:text-h2-4xl
                    3xl:text-h2-3xl
                    2xl:text-h2-2xl
                    xl:text-h2-xl
                    lg:text-h2-lg
                    md:text-h2-md
                    text-h2-sm


                    
        
                    !font-extrabold capitalize
                    
                    
                    
                    
                    `}
                        animate={OutlineTextControl}>{heading}</motion.h3>
                </motion.div>
            </Parallax>
            <p className='text-lg text-gray mb-[2rem]'>{discription}</p>
            <img src={first_image_url} width="60%" className="ml-auto" alt="project-image" />
            <Parallax offset={100} className="-mt-[7rem] mb-[5rem]" >
                <img src={second_image_url} width="60%" className="" alt="poject-image" />
            </Parallax>
        </div >
    )
}

export default LargeTextWithImages


