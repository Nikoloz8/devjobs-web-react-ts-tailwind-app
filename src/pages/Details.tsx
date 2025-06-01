import DetailsContent from "../components/Details/DetailsContent";
import DetailsWebsite from "../components/Details/DetailsWebsite";

export default function Details() {


    return (
        <div className="w-[730px] max-sm:m-[0_30px_0_30px]! max-md:w-[100%]! max-lg:m-[0_50px_0_50px]!">
            <DetailsWebsite />
            <DetailsContent />
        </div>

    )
}
