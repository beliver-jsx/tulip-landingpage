import { useRouter } from "next/router";
import { LgMenuBtn } from "./buttons";
import { useState, useEffect } from "react";

const Menu = () => {
    const { push, pathname } = useRouter();


    return (
        <div className="hidden gap-y-3.5 lg:grid">
            {pathname == '/' ? < LgMenuBtn
                click={() => {
                    push("/");
                }}
                text={"Home"}
                active={true}
            /> : < LgMenuBtn
                click={() => {
                    push("/");
                }}
                text={"Home"}
                active={false}
            />}

            <LgMenuBtn
                click={() => {
                    push("/about");
                }}
                text={"About"}
                active={pathname === "/about"}
            />

            <LgMenuBtn
                click={() => {
                    push("/projects");
                }}
                text={"Projects"}
                active={pathname === "/projects"}
            />

            <LgMenuBtn
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