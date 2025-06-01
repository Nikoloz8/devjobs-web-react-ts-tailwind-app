import { useParams } from "react-router-dom"
import tailwind from "../../shared/tailwind"
import data from "../../../data.json"
import { useContext } from "react"
import { Context } from "../../pages/Layout"

export default function DetailsFooter() {


    const { name } = useParams()
    const job = data.find((e) => e.position === name)

    const { H3, P } = tailwind()

    const {toggle} = useContext(Context)

    return (
        <footer className={`bg-[#FFFFFF] ${toggle? "bg-[#19202D]!" : null} flex justify-center w-[100%] mt-[50px] p-[20px]!`}>
            <div className="w-[730px] flex justify-between items-center">
                <div className="flex flex-col gap-[8px] max-sm:hidden">
                    <h1 className={`${H3} ${toggle? "text-[#FFFFFF]" : null}`}>{job?.position}</h1>
                    <h4 className={`${P} text-[#6E8098]!`}>So Digital Inc.</h4>
                </div>
                <button className={`w-[140px] h-[48px]! flex items-center max-sm:w-[100%] justify-center bg-[#5964E0] rounded-[5px] ${P} text-[#FFFFFF] font-[700]`}>
                    Apply Now
                </button>
            </div>
        </footer>)
}
