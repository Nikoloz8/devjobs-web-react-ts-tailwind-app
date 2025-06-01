import { useContext, useState } from "react"
import tailwind from "../../shared/tailwind"
import type { ISetForm } from "../../types"
import { Context } from "../../pages/Layout"


export default function FilterBar({ setForm }: ISetForm) {

    const [input, setInput] = useState({
        search: "",
        searchByLocation: "",
        checked: false
    })

    const { toggle } = useContext(Context)

    const { P } = tailwind()

    return (
        <div onKeyDown={(e) => {
            if (e.key === "Enter") {
                setForm({ ...input, startSearch: true })
            }
        }} className={`w-[100%] h-[80px] flex items-center p-[0_16px_0_16px] bg-[#FFFFFF] mt-[-40px] rounded-[6px] ${toggle ? "bg-[#121721]!" : undefined}`}>
            <label htmlFor="search" className="h-[100%] w-[45%]! p-[0_16px_0_16px] gap-[24px] flex items-center">
                <img src="/images/desktop/icon-search.svg" alt="" />
                <input onChange={(e) => setInput({ ...input, search: e.target.value })} value={input.search} type="text" className={`outline-none ${toggle ? "text-[#FFFFFF]!" : undefined} w-[100%] caret-[#5964E0]! ${P}`} placeholder="Filter by title, companies, expertise…" name="" id="search" />
            </label>
            <label htmlFor="searchByLocation" className="w-[33%] border-[0_1px_0_1px] flex items-center p-[0_16px_0_16px] gap-[24px] border-solid border-[rgba(110,128,152,0.2)] h-[100%]">
                <img src="/images/desktop/icon-location.svg" alt="" />
                <input onChange={(e) => setInput({ ...input, searchByLocation: e.target.value })} value={input.searchByLocation} type="text" className={`outline-none ${toggle ? "text-[#FFFFFF]!" : undefined} w-[100%] caret-[#5964E0]! ${P}`} placeholder="Filter by location…" name="" id="searchByLocation" />
            </label>
            <div className="flex items-center justify-between h-[100%] p-[16px_0_16px_16px]! w-[32%]">
                <label htmlFor="check" className={`${P} ${toggle ? "text-[#FFFFFF]!" : undefined} flex gap-[12px] font-[700]`}>
                    <input onChange={(e) => setInput({ ...input, checked: e.target.checked })} checked={input.checked} type="checkbox" id="check" className="peer hidden" />
                    <div className="w-[24px] peer-checked:bg-[url('/images/desktop/icon-check.svg')] bg-center bg-no-repeat peer-checked:bg-[#5964E0] h-[24px] bg-[rgba(110,128,152,0.2)] rounded-[3px]">
                    </div>Full Time Only</label>
                <button onClick={() => setForm({ ...input, startSearch: true })} className={`w-[120px] h-[100%] flex items-center justify-center bg-[#5964E0] rounded-[5px] ${P} text-[#FFFFFF] font-[700]`}>Search</button>
            </div>
        </div>)
}
