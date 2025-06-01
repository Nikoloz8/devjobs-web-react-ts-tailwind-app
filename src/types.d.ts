import type { NavigateFunction } from "react-router-dom"

type TContext = {
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
    toggle: boolean
    navigate: NavigateFunction
}

interface ISetForm {
    setForm: React.Dispatch<React.SetStateAction<{
        search: string;
        searchByLocation: string;
        checked: boolean;
        startSearch: boolean;
    }>>
}

type TRenderJobs = {
    form: {
        search: string,
        searchByLocation: string,
        checked: boolean,
        startSearch: boolean
    }
    setForm: ISetform
}
