import { useRouter } from "next/router"
import { LgMenuBtn } from "./atoms/buttons"

const listOfLinks = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'projects', href: '/projects' },
    { name: 'contact', href: '/contact' },
]

const LgMenu = () => {
    const { push, pathname } = useRouter()

    const click: any = {
        home: () => {
            push('/')
        },
        about: () => {
            push('/about')
        },
        projects: () => {
            push('/projects')
        },
        contact: () => {
            alert('email')
        },
    }

    return (
        <div className=" grid gap-y-3.5 ">
            {listOfLinks.map((Link) => <LgMenuBtn
                click={click[Link.name]}
                text={Link.name}
                active={pathname === Link.href}
            />)}
        </div>
    )
}
export default LgMenu



