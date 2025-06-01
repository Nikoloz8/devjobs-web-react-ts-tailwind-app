import { useContext } from "react"
import data from "../../../data.json"
import tailwind from "../../shared/tailwind"
import type { TRenderJobs } from "../../types"
import { Context } from "../../pages/Layout"

export default function RenderJobs({ form }: TRenderJobs) {

    const { P, H3, H4 } = tailwind()

    const { navigate } = useContext(Context)

    const filteredJobs = data.filter((e) => {
        if (!form.startSearch) return true

        const matchesSearch =
            form.search &&
            (e.position.toLowerCase().includes(form.search.toLowerCase()) ||
                e.contract.toLowerCase().includes(form.search.toLowerCase()) ||
                e.company.toLowerCase().includes(form.search.toLowerCase()))

        const matchesLocation =
            form.searchByLocation &&
            e.location.toLowerCase().includes(form.searchByLocation.toLowerCase())

        const matchesContract =
            form.checked && e.contract.toLowerCase() === "full time"

        return (
            (form.search ? matchesSearch : true) &&
            (form.searchByLocation ? matchesLocation : true) &&
            (form.checked ? matchesContract : true)
        )
    })

    const { toggle } = useContext(Context)



    return (

        filteredJobs.map((e, index) => {
            return <div className={`w-[350px] max-sm:w-[327px] mt-[30px]! rounded-[6px] bg-[#FFFFFF] p-[0_32px_32px_32px]! ${toggle ? "bg-[#19202D]!" : undefined}`} key={index}>
                <div className={`mt-[-24px] mb-[24px] w-[50px] h-[50px] flex items-center justify-center rounded-[15px]`} style={{ backgroundColor: e.logoBackground }}>
                    <img src={e.logo} alt="" />
                </div>
                <div className="flex flex-col gap-[24px]!">
                    <div className="flex flex-col gap-[12px]!">
                        <h4 className={`${P} text-[#6E8098]! flex gap-[15px]`}>{e.postedAt} <li>{e.contract}</li></h4>
                        <h3 onClick={() => navigate(`/details/${e.position}`)} className={`${H3} text-[1.8rem]! hover:text-[#6E8098] cursor-pointer ${toggle ? "text-[#FFFFFF]" : null}`}>{e.position}</h3>
                        <h4 className={`${P} text-[#6E8098]!`}>{e.company}</h4>
                    </div>
                    <h4 className={`${H4} text-[#5964E0]!`}>{e.location}</h4>
                </div>
            </div>
        })
    )
}
