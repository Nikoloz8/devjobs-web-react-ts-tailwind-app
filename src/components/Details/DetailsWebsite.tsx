import { useParams } from "react-router-dom"
import data from "../../../data.json"
import tailwind from "../../shared/tailwind"
import { useContext } from "react"
import { Context } from "../../layouts/Layout"

export default function DetailsWebsite() {

    const { name } = useParams()
    const job = data.find((e) => e.position === name)

    const { H2, P } = tailwind()

    const { toggle } = useContext(Context)


    return (
        <div className={`w-[100%] justify-between h-[140px] max-md:h-[200px] max-md:items-center max-md:flex-col bg-[#FFFFFF] max-md:justify-start max-md:gap-[20px]! flex rounded-[0_6px_0_6px]! mt-[-50px] ${toggle ? "bg-[#19202D]!" : undefined}`}>
            <div className="h-[100%] max-md:w-[50px]! max-md:h-[50px]! flex items-center max-md:items-center rounded-bl-[6px] max-md:mt-[-25px] max-md:rounded-[16px]! justify-center w-[140px]" style={{ backgroundColor: job?.logoBackground }}>
                <img src={job?.logo} alt="" />
            </div>
            <div className="p-[48px] max-md:p-0! max-md:gap-[20px]! max-md:flex-col w-[90%] flex justify-between items-center">
                <div>
                    <h2 className={`${H2} max-md:text-center ${toggle ? "text-[#FFFFFF]!" : undefined}`}>{job?.company}</h2>
                    <h4 className={`${P} text-[#6E8098]!`}>{job?.company.toLowerCase()}.com</h4>
                </div>
                <button className={`w-[147px] ${toggle ? "bg-[#313642]! text-[#FFFFFF]!" : undefined} h-[48px] rounded-[5px] bg-[#C5C8F3] ${P} font-[700]! text-[#5964E0]!`}>
                    Company Site
                </button>
            </div>
        </div>)
}
