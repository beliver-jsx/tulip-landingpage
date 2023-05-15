import data from '../projects.json'
import { useRouter } from 'next/router'
import Divider from '@/components/atoms/Divider'
import BackToTop from '@/components/atoms/BackToTop'
import OutlineText from '@/components/Animation/OutlineText'
import TrackingText from '@/components/Animation/TextTracking'
import LargeTextWithImages from '@/components/atoms/LargeTextWithImages'
import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'

const Home = () => {
  const router = useRouter()
  const handleSeeProjects = () => {
    router.push('/projects')
  }
  return (
    <div>
      <TextRevealAnimation
        classNames='lg:mt-[10rem] mt-[5rem]'
        lines={[
          "Hello! I'm",
          'Richard William,',
          'a Philippine - ',
          'based front -',
          'end web',
          'developer.']} />

      <section className='lg:mt-[300px] mt-[5rem]  lg:w-[50%] ml-auto mb-[5rem]'>
        <p className='lg:text-lg text-smd font-medium '>I'm a 19-year-old who's passionate about creating interactive <br /> websites that bring an awesome experience to the users. Currently <br /> in 1st year college taking up computer science, but accepting <br /> freelance projects!</p>
        <p className='lg:text-lg text-smd mt-[3rem] font-medium'>I hope you enjoy scrolling!</p>
        <p className='text-gray lg:text-lg text-smd mt-[3rem] font-medium'>See more about me!</p>

      </section>


      <section>
        {data.map((project) => (
          <LargeTextWithImages
            href={project.slug}
            heading={project.name}
            second_image_url={project.gallary[1]}
            first_image_url={project.gallary[0]}
            discription={project.overview} />
        ))}
      </section>



      <TrackingText handleClick={handleSeeProjects} text="See all projects →" className='text-lg text-gray cursor-pointer mt-10' />

      <Footer />
      <Divider />
      <BackToTop />
    </div>
  )
}

export default Home

//self (componenet) footer
const Footer = () => {
  return (
    <div>
      <h1 className='text-xl'>Do you have a project idea in mind? Let me know,</h1>
      <OutlineText classNames='text-xl cursor-pointer' text='Email me!' />
      <div className='flex gap-5 px-2'>
        <TrackingText text="Twitter" className='text-lg text-gray' />
        <TrackingText text="Github" className='text-lg text-gray' />
      </div>
    </div>
  )
}

