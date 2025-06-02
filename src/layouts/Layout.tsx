import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { createContext, useEffect, useState } from "react"
import type { TContext } from "../types"
import DetailsFooter from "../components/Details/DetailsFooter"


export const Context = createContext<TContext>({
    setToggle: () => { },
    toggle: false,
    navigate: () => { }
})

export default function Layout() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/")
    }, [])

    const location = useLocation().pathname

    const [toggle, setToggle] = useState(false)

    console.log(toggle)

    return (
        <Context.Provider value={{ setToggle, toggle, navigate }}>
            <div className={`w-[100%]! min-h-[100vh]! flex-col items-center! bg-[#F4F6F8] flex justify-center! ${toggle ? "bg-[#121721]!" : undefined}`}>
                <Header />
                <div className={`w-[1110px]! flex min-h-[100vh]! justify-center max-xl:w-[100%]!`}>
                    <Outlet />
                </div>
                {location.includes("details") ? <DetailsFooter /> : null}
            </div>
        </Context.Provider>
    )
}
