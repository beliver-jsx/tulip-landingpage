import { project } from '@/type'
import data from '../../projects.json'
import { GetStaticProps, NextPage } from "next"
import Header from "@/components/atoms/ProjectHeader"
import Footer from '@/components/atoms/ProjectFooter'
const ProjectName: NextPage<project> = ({ name, index, story, image, gallary, overview, development, previous, next }) => {
    return (
        <div>
            <Header {...{ name, index }} />

            <section>
                <img src={image} alt="banner-image" />
            </section>

            <section className='mt-[20rem] max-w-3xl'>
                <h3 className='4xl:text-h4-4xl 3xl:text-h4-3xl 2xl:text-h4-2xl xl:text-h4-xl lg:text-h4-lg md:text-h4-md text-h4-sm mb-10'>Overview</h3>
                <p className='text-lg'>{overview}</p>
            </section>

            <section className='ml-auto mt-[10rem] max-w-3xl'>
                <h3 className='4xl:text-h4-4xl 3xl:text-h4-3xl 2xl:text-h4-2xl xl:text-h4-xl lg:text-h4-lg md:text-h4-md text-h4-sm mb-10'>Story</h3>
                <p className='text-lg'>{story}</p>
            </section>

            <section className='mt-[10rem] max-w-3xl'>
                <h3 className='4xl:text-h4-4xl 3xl:text-h4-3xl 2xl:text-h4-2xl xl:text-h4-xl lg:text-h4-lg md:text-h4-md text-h4-sm mb-10'>Development</h3>
                <p className='text-lg'>{development}</p>
            </section>

            <div className="w-full h-[1px] my-[15rem]  dark:bg-white bg-black "></div>

            <section>
                {gallary.map((img, index) => (
                    <div className='flex even:justify-end my-[10rem]' key={index}>
                        <img
                            src={img}
                            alt="banner-image"
                            className='w-[80%]'
                        />
                    </div>
                ))}
            </section>


            <div className="w-full h-[1px] mt-[15rem] mb-[6rem]  dark:bg-white bg-black "></div>


            <Footer  {...{ previous, next }} />


        </div>
    )
}


export default ProjectName

export const getStaticPaths = async () => {
    const paths = data.map((page) => ({
        params: { name: page.name },
    }));
    return {
        paths,
        fallback: false, // or "blocking" if needed
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pageData = data.find((page) => page.name === params?.name);
    return {
        props: {
            ...pageData,
        },
    };
}




