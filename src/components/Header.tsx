import { useContext } from "react"
import { Context } from "../layouts/Layout"

export default function Header() {

    const { setToggle, toggle, navigate } = useContext(Context)


    return (
        <header className="w-[100%] max-sm:items-start p-[0_50px_0_50px] max-sm:p-[0_30px_0_30px]! rounded-[0_0_0_100px] min-h-[160px] bg-[url('/images/desktop/bg-pattern-header.svg')] bg-no-repeat bg-center bg-cover max-lg:bg-[url('/images/tablet/bg-pattern-header.svg')] max-sm:bg-[url('/images/mobile/bg-pattern-header.svg')] max-sm:rounded-[0]! max-sm:h-[136px] flex items-center justify-center">
            <div className="w-[1110px] max-xl:w-[100%] max-sm:mt-[40px]! flex justify-between">
                <img onClick={() => navigate("/home")} className="cursor-pointer" src="/images/desktop/logo.svg" alt="" />
                <div className="flex gap-[16px] items-center">
                    <img src="/images/desktop/icon-sun.svg" alt="" />
                    <label onClick={() => setToggle(!toggle)} style={{ transition: "0.5s" }} className={`w-[48px] h-[24px] p-[5px]! cursor-pointer flex items-center rounded-[12px] bg-[#FFFFFF]`}>
                        <span style={toggle ? { transform: "translateX(170%)", transition: "0.5s" } : { transition: "0.5s" }} className="w-[14px] block h-[14px] rounded-[100%] bg-[#5964E0]!"></span>
                    </label>
                    <img src="/images/desktop/icon-moon.svg" alt="" />
                </div>
            </div>
        </header>
    )
}
