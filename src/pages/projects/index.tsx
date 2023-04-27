import SmoothScroll from '@/components/SmoothScroller'
import Divider from '@/components/atoms/Divider'
import BackToTop from '@/components/atoms/BackToTop'
import ProjectListElement from '@/components/atoms/ProjectListElement'

export default function Home() {
    return (
        <div>

            <h1 className='text-xl mt-[270px]'>Selected <br /> Works</h1>


            <section className='my-[10rem]'>




                <ProjectListElement
                    name="Portfolio"
                    index={'01'}
                    year={'2020'}
                    imageUrl='/' />



                <ProjectListElement
                    name="twitter clone"
                    index={'02'}
                    year={'2020'}
                    imageUrl='/' />



                <ProjectListElement
                    name="Movie Search"
                    index={'03'}
                    year={'2020'}
                    imageUrl='/' />







            </section>




            <Divider />

            <BackToTop />

        </div>



    )
}


