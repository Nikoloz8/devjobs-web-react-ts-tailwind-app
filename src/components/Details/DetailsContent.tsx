import { useParams } from "react-router-dom"
import tailwind from "../../shared/tailwind"
import data from "../../../data.json"

export default function DetailsContent() {

    const { P, H1, H4, H3 } = tailwind()

    const { name } = useParams()
    const job = data.find((e) => e.position === name)


    return (
        <div className="w-[100%] bg-[#FFFFFF] flex flex-col p-[40px]! mt-[20px]">
            <div className="flex justify-between items-center w-[100%]">
                <div className="flex flex-col gap-[8px]">
                    <h4 className={`${P} text-[#6E8098]! flex gap-[15px]`}>
                        {job?.postedAt} <li>{job?.contract}</li>
                    </h4>
                    <h1 className={`${H1} `}>{job?.position}</h1>
                    <h4 className={`${H4} text-[#5964E0]!`}>{job?.location}</h4>
                </div>
                <button className={`w-[140px] h-[48px]! flex items-center justify-center bg-[#5964E0] rounded-[5px] ${P} text-[#FFFFFF] font-[700]`}>
                    Apply Now
                </button>
            </div>
            <p className={`${P} text-[#6E8098]! m-[32px_0_32px_0]`}>
                {job?.description}
            </p>
            <h3 className={`${H3}`}>Requirements</h3>
            <p className={`${P} text-[#6E8098]! m-[32px_0_24px_0]`}>
                {job?.requirements.content}
            </p>
            <ul className="flex flex-col gap-[8px]">
                {job?.requirements.items.map((e, index) => {
                    return <li key={index} className={`${P} text-[#6E8098]! pl-[20px]! ml-[16px]! list-disc marker:text-[#5964E0]!`}>{e}</li>
                })}
            </ul>
            <h3 className={`${H3} mt-[32px]`}>What You Will Do</h3>
            <p className={`${P} text-[#6E8098]! m-[32px_0_32px_0]`}>
                {job?.role.content}
            </p>
            <ul className="flex flex-col gap-[8px]">
                {job?.role.items.map((e, index) => {
                    return <li key={index} className={`${P} text-[#6E8098]! pl-[20px]! ml-[16px]! list-disc marker:text-[#5964E0]!`}>{e}</li>
                })}
            </ul>
        </div>)
}
