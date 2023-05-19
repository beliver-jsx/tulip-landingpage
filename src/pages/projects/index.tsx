import data from '../../projects.json'
import Divider from '@/components/atoms/Divider'
import BackToTop from '@/components/atoms/BackToTop'
import ProjectListItem from '@/components/atoms/Project'
import TextRevealAnimation from '@/components/Animation/TextRevealAnimation'

export default function Home() {
    return (
        <div>
            <TextRevealAnimation classNames='lg:my-[10rem] my-[5rem]' lines={['Selected', 'Works']} />
            {data.map((item, index) => <ProjectListItem item={item} index={index} />)}
            <Divider />
            <BackToTop />
        </div>
    )
}