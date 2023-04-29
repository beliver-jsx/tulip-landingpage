import { useRouter } from "next/router"
import { LgMenuBtn } from "./atoms/buttons"

const LgMenu = () => {
    const { push } = useRouter()

    const click = {
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
        <div className="mt-auto grid gap-y-3.5">
            <LgMenuBtn click={click.home} text={'Home'} />
            <LgMenuBtn click={click.about} text={'About'} />
            <LgMenuBtn click={click.projects} text={'Projects'} />
            <LgMenuBtn click={click.contact} text={'Contact'} />
        </div>
    )
}
export default LgMenu



