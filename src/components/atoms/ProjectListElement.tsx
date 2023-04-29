import { useState } from "react"
import { motion } from 'framer-motion'

interface props {
    index: string,
    name: string,
    year: string,
    imageUrl: string
}

const ProjectListElement: React.FC<props> = ({
    index,
    name,
    year,
    imageUrl
}) => {
    const [visible, setVisible] = useState(false)

    const handleHoverStart = () => {
        setVisible(!false)
    }
    const handleHoverEnd = () => {
        setVisible(false)
    }

    return (
        <motion.div
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            className="border-t  py-2">

            <div className="flex items-center justify-between">
                <p className="text-md text-gray">{index}</p>
                <p className="text-md text-gray">{year}</p>
            </div>


            <div className="relative">
                <h5 className="text-[80px] outline-text capitalize font-[800]">{name}</h5>
                {visible && <div className="w-[700px] h-[500px] bg-red-500 border-2 border-white absolute right-0 top-0">

                </div>}

            </div>

        </motion.div>
    )
}
export default ProjectListElement