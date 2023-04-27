import { Children } from "react"
import LgMenu from "./LgMenu"
import ThemeToggle from "./ThemeToggle"


interface props {
    children: JSX.Element
}

const Layout: React.FC<props> = ({ children }) => {
    return (
        <div className="grid grid-cols-[300px_auto_300px] h-screen">

            <aside className="border-r-[1px] border-[#ffffff29] p-[47px] flex flex-col ">
                <h5>Richard William's <br /> Portfolio</h5>
                <LgMenu />
            </aside>


            <div className="hidescollbar overflow-y-scroll ">
                <main className="">{children}</main>
            </div>


            <aside className="border-l-[1px] border-[#ffffff29] p-[47px] flex flex-col">

                <ThemeToggle />

                <h5 className="text-right mt-auto">Available for Work</h5>



            </aside>



        </div>
    )
}
export default Layout