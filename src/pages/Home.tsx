import { useState } from "react"
import RenderJobs from "../components/Home/RenderJobs"
import FilterBar from "../components/Home/FilterBar";

export default function Home() {

    const [form, setForm] = useState({
        search: "",
        searchByLocation: "",
        checked: false,
        startSearch: false
    });


    return (
        <div className="flex flex-col w-[100%]">
            <FilterBar setForm={setForm} />
            <div className="flex items-center m-[50px_0_50px_0] flex-wrap justify-center gap-[28px]!">
                <RenderJobs form={form} setForm={setForm} />
            </div>
        </div>
    )
}
