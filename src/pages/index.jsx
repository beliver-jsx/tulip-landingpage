import Divider from '@/components/atoms/Divider'
import BackToTop from '@/components/atoms/BackToTop'
import SmoothScroll from '@/components/SmoothScroller'
import LargeTextWithImages from '@/components/atoms/LargeTextWithImages'




import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'




export default function Home() {

  return (
    <div>

      <TextRevealAnimation classNames='mt-[10rem]' lines={[
        'Hello! Im',
        'Richard William,',
        'a Philippine - ',
        'based front -',
        'end web',
        'developer.']} />

      <section className='mt-[300px]  w-[50%] ml-auto'>

        <p className='text-lg '>I'm a 19-year-old who's passionate about creating interactive <br /> websites that bring an awesome experience to the users. Currently <br /> in 1st year college taking up computer science, but accepting <br /> freelance projects!</p>

        <p className='text-lg mt-[3rem]'>I hope you enjoy scrolling!</p>


        <p className='text-gray text-lg mt-[3rem]'>See more about me!</p>

      </section>

      <Divider />

      <LargeTextWithImages
        heading='PortFolio'
        first_image_url='/'
        second_image_url='/'
        discription='My very first version of my web developer portfolio' />


      <Divider />


      <LargeTextWithImages
        heading='Twitter Clone'
        first_image_url='/'
        second_image_url='/'
        discription='A small Twitter clone with user authentication, some back-end development, and an edit feature!' />

      <Divider />


      <LargeTextWithImages
        heading='Movie Search'
        first_image_url='/'
        second_image_url='/'
        discription='An iOS-inspired movie search app using the TMDB API.' />

      <Divider />

      <LargeTextWithImages
        heading='COVID-19 Tracker'
        first_image_url='/'
        second_image_url='/'
        discription='A website showing the current COVID-19 cases using the disease.sh API.' />

      <Divider />

      <Footer />

      <Divider />

      <BackToTop />
    </div>
  )
}






const Footer = () => {
  return (
    <div>
      <h1 className='text-xl'>Do you have a project idea in mind? Let me know,</h1>
      <h1 className='text-xl outline-text'>Email me!</h1>
      <div className='flex'>
        <p className='text-lg text-gray mr-10'>Twitter</p>
        <p className='text-lg text-gray'>Github</p>

      </div>
    </div>
  )
}