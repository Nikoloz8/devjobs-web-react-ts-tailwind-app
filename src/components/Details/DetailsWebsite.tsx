import { useParams } from "react-router-dom"
import data from "../../../data.json"
import tailwind from "../../shared/tailwind"

export default function DetailsWebsite() {

    const { name } = useParams()
    const job = data.find((e) => e.position === name)

    const { H2, P } = tailwind()


    return (
        <div className="w-[100%] justify-between h-[140px] bg-[#FFFFFF] flex rounded-[0_6px_0_6px]! mt-[-50px]">
            <div className="h-[100%] flex items-center rounded-bl-[6px] justify-center w-[140px]!" style={{ backgroundColor: job?.logoBackground }}>
                <img src={job?.logo} alt="" />
            </div>
            <div className="p-[48px] w-[90%] flex justify-between items-center">
                <div>
                    <h2 className={`${H2}`}>{job?.company}</h2>
                    <h4 className={`${P} text-[#6E8098]!`}>{job?.company.toLowerCase()}.com</h4>
                </div>
                <button className={`w-[147px] h-[48px] rounded-[5px] bg-[#C5C8F3] ${P} font-[700]! text-[#5964E0]!`}>
                    Company Site
                </button>
            </div>
        </div>)
}
