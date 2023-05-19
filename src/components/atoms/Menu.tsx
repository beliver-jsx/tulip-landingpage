import { useRouter } from "next/router";
import { MenuButton as Button } from "./buttons";
const Menu = () => {
    const router = useRouter();
    const { pathname, push } = router
    return (
        <div className="hidden gap-y-3.5 lg:grid">
            <Button
                click={() => {
                    push("/");
                }}
                text={"Home"}
                active={pathname == '/'}
            />

            <Button
                click={() => {
                    push("/about");
                }}
                text={"About"}
                active={pathname === "/about"}
            />

            <Button
                click={() => {
                    push("/projects");
                }}
                text={"Projects"}
                active={pathname === "/projects"}
            />

            <Button
                click={() => {
                    window.location.href = "mailto:someone@example.com";
                }}
                text={"Contact"}
                active={false}
            />
        </div>
    )
}

export default Menu

