interface largeTextWithImages {
    heading: string,
    discription: string,
    first_image_url: string,
    second_image_url: string
}

import { motion, useAnimate } from 'framer-motion'

import Parallax from "../Parallax"

const LargeTextWithImages: React.FC<largeTextWithImages> = ({ heading, discription, first_image_url, second_image_url }) => {


    const [scope, animate] = useAnimate()

    const handleHoverIn = () => {
        animate('h1', { color: 'white' })
    }
    const handleHoverOut = () => {
        animate('h1', { color: 'black' })
    }

    return (
        <div className=' border-red-500' ref={scope}




            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}






        >
            <Parallax>
                <motion.h1
                    whileHover={{
                        textShadow: 'none',
                    }}
                    className=' text-xl outline-text   transition-colors '>{heading}</motion.h1>
            </Parallax>
            <p className='text-lg  text-gray'>{discription}</p>
            <div className='relative h-[800px] mt-[3rem]'>

                <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682343160245-354923696ce6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")' }} className='w-[60%] bg-red-500 h-[500px] absolute top-0 right-0 bg-no-repeat bg-cover bg-center'></div>

                <Parallax className="absolute w-[60%] bg-purple-500 h-[500px]  left-0 bottom-[0px]  ">
                    <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1682347641333-b9080bfe7af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")' }} className='bg-no-repeat bg-cover bg-center w-[700px] h-[500px]'></div>
                </Parallax>

            </div>
        </div>
    )
}

export default LargeTextWithImages


