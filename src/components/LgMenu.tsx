import { LgMenuBtn } from "./atoms/buttons"


const LgMenu = () => {

    const click = {
        home: () => { },
        about: () => { },
        projects: () => { },
        contact: () => { },
    }

    return (
        <div className="mt-auto grid gap-y-3.5">
            <LgMenuBtn click={click.home} text={'Home'} />
            <LgMenuBtn click={click.home} text={'About'} />
            <LgMenuBtn click={click.home} text={'Projects'} />
            <LgMenuBtn click={click.home} text={'Contact'} />

        </div>
    )
}
export default LgMenu



