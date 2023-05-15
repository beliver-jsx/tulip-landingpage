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
            className='py-[5rem] border-y-[1px] border-gray'>
            <Parallax className="mt-[5rem] mb-[1rem]" offset={50}>
                <motion.div className='flex relative'>
                    <motion.h3 className='capitalize tracking-wider 4xl:text-xl 3xl:text-[112px] 2xl:text-[112px] xl:text-[96px] lg:text-[96px] md:text-[80px] text-[52px] font-[800]'
                        animate={simpleTextControl}>{heading}</motion.h3>
                    <motion.h3 className={`capitalize absolute outline-text tracking-wider 4xl:text-xl 3xl:text-[112px] 2xl:text-[112px] xl:text-[96px] lg:text-[96px] md:text-[80px] text-[52px] font-[800]`}
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


