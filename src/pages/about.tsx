import SmoothScroll from '@/components/SmoothScroller'
import Divider from '@/components/atoms/Divider'
import BackToTop from '@/components/atoms/BackToTop'
import LargeTextWithImages from '@/components/atoms/LargeTextWithImages'

import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'


import Parallax from '@/components/Parallax'


export default function Home() {
    return (
        <div>

            <Parallax offset={100} >
                <TextRevealAnimation classNames='mt-[10rem]' lines={[
                    'Welcome, you',
                    'beautiful',
                    'hooman! Here s',
                    'my story...'
                ]} />
            </Parallax>

            <section className='mt-[100px] w-[50%] ml-auto'>

                <p className='text-lg'>


                    I was introduced to web development in 10th grade and have loved it ever since. Since then, I have been self-studying and diving into web development with a focus on the front-end.
                    <br />
                    <br />
                    <br />

                    I have freelance experience in Fiverr and still looking to expand and grow my skills. Currently, I am accepting freelance projects that have to do with front-end web development. Hopefully, you can be one of my clients!
                    <br />
                    <br />
                    <br />

                    I'm also available for collaborations if you're looking for it! Feel free to send me an email.
                    <br />
                    <br />
                    <br />

                </p>

            </section>

            <Divider />


            <section className='grid grid-cols-[2fr_2fr]'>
                <div>
                    <h3 className="text-[60px]">Skills</h3>
                </div>

                <Parallax>
                    <div>
                        <p className='text-lg'>HTML</p>
                        <p className='text-lg'>CSS</p>
                        <p className='text-lg'>Javascript</p>
                        <p className='text-lg'>Tailwind CSS</p>
                        <p className='text-lg'>GSAP</p>
                        <p className='text-lg'>Git</p>
                        <p className='text-lg'>React Js</p>
                        <p className='text-lg'>Redux</p>
                        <p className='text-lg'>Framer Motion</p>
                    </div>
                </Parallax>

            </section>

            <section className='grid grid-cols-[2fr_2fr] mt-[10rem]'>
                <div>
                    <h3 className="text-[60px]">Credits</h3>
                </div>

                <div>
                    <p className='text-lg mb-10'>This website is developed using React JS with Next JS. Inspirations of this website are Ronnie Feng and Hugo Bazin.</p>

                    <p className='text-lg mb-10'>Font used is Manrope.</p>

                    <p className='text-lg mb-10'>Animations are powered by Framer Motion.</p>

                </div>

            </section>





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