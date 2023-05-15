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

    const isActiveLink = (path: string) => {
        return pathname === path ? true : false;
    };

    console.log(pathname)

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
        <div className=" hidden gap-y-3.5 lg:grid ">
            <LgMenuBtn
                click={() => { push('/') }}
                text={'Home'}
                active={isActiveLink('/')}
            />

            <LgMenuBtn
                click={() => { push('/about') }}
                text={'About'}
                active={isActiveLink('/about')}
            />

            <LgMenuBtn
                click={() => { push('/projects') }}
                text={'Projects'}
                active={isActiveLink('/projects')}
            />

            <LgMenuBtn
                click={() => { }}
                text={'Contact'}
                active={false}
            />
        </div>
    )
}
export default LgMenu



