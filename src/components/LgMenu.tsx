import { useRouter } from "next/router"
import { LgMenuBtn } from "./atoms/buttons"

const LgMenu = () => {
    const { push, pathname } = useRouter()

    const isActiveLink = (path: string) => {
        return pathname === path ? true : false;
    };
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
                click={() => { window.location.href = "mailto:someone@example.com" }}
                text={'Contact'}
                active={false}
            />
        </div>
    )
}
export default LgMenu



