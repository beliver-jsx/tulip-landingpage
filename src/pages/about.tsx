import Parallax from '@/components/Parallax'
import Divider from '@/components/atoms/Divider'
import BackToTop from '@/components/atoms/BackToTop'
import TrackingText from '@/components/Animation/TextTracking'
import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'

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

            <Parallax offset={100}>
                <section className='lg:mt-[200px] mt-[5rem] lg:w-[50%] ml-auto mb-[5rem]'>
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
                        <div className='flex gap-10'>
                            <TrackingText text="Twitter" className='text-lg text-gray cursor-pointer' />
                            <TrackingText text="Github" className='text-lg text-gray cursor-pointer' />
                        </div>
                    </p>
                </section>
            </Parallax>

            <Divider />

            <Parallax offset={80}>
                <section className='grid lg:grid-cols-[2fr_2fr] mt-[15rem] gap-5'>
                    <div>
                        <h3 className="text-[70px] font-[800]">Skills</h3>
                    </div>

                    <div className='grid gap-1'>
                        <p className='text-lg'>HTML</p>
                        <p className='text-lg'>CSS</p>
                        <p className='text-lg'>Javascript</p>
                        <p className='text-lg'>Tailwind CSS</p>
                        <p className='text-lg'>GSAP</p>
                        <p className='text-lg'>Git</p>
                        <p className='text-lg'>React Js</p>
                        <p className='text-lg'>Redux</p>
                        <p className='text-lg'>Framer Motion</p>
                        <p className='text-lg'>GSAP</p>
                        <p className='text-lg'>Git</p>
                        <p className='text-lg'>React Js</p>
                        <p className='text-lg'>Redux</p>
                        <p className='text-lg'>Framer Motion</p>
                    </div>

                </section>
            </Parallax>

            <Parallax offset={80}>
                <section className='grid lg:grid-cols-[2fr_2fr] mt-[10rem] gap-5'>
                    <div>
                        <h3 className="text-[70px] font-[800]">Credits</h3>
                    </div>
                    <div>
                        <p className='text-lg mb-10'>This website is developed using React JS with Next JS. Inspirations of this website are Ronnie Feng and Hugo Bazin.</p>
                        <p className='text-lg mb-10'>Font used is <TrackingText text='Manrope' className='inline !text-gray cursor-pointer' /> </p>
                        <p className='text-lg mb-10'>Animations are powered by <TrackingText text='Framer Motion' className='inline !text-gray cursor-pointer' />
                        </p>
                    </div>
                </section>
            </Parallax>

            <Divider />

            <BackToTop />

        </div>
    )
}



