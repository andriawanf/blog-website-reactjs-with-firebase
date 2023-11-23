import { useContext } from "react";
import { AppContext } from "../App";

export default function Header() {
    const {blogLists} = useContext(AppContext);
    
    return (
        <div className="py-10 sm:py-48 lg:pt-12">
            <div className="grid w-full grid-cols-12 gap-4">
                <div className="grid grid-cols-2 col-span-12 gap-4 overflow-hidden sm:col-span-4 sm:grid-rows-2">
                    <div className="relative h-56 sm:col-span-2 lg:h-[19.5rem] overflow-hidden z-10 rounded-2xl cursor-pointer">
                        <img src={blogLists?.[0].photo_cover} alt="" className="absolute top-0 left-0 z-0 object-cover object-center w-full h-full overflow-hidden transition duration-300 ease-out transform scale-100 rounded-2xl hover:scale-110" />
                        <div className="absolute bottom-0 left-0 z-10 w-full p-4 lg:p-6 rounded-2xl bg-gradient-to-t from-black/70 to-black/2">
                            <p className="hidden text-white lg:font-medium lg:text-sm lg:block">{blogLists?.[0].tag_blog}</p>
                            <h1 className="mt-2 text-sm font-semibold leading-relaxed text-white lg:text-xl">{blogLists?.[0].title}</h1>
                        </div>
                    </div>
                    <div className="relative h-56 p-6 sm:col-span-2 lg:h-[19.5rem] rounded-2xl overflow-hidden cursor-pointer">
                        <img src={blogLists?.[1].photo_cover} alt="" className="absolute top-0 left-0 z-0 object-cover object-center w-full h-full overflow-hidden transition duration-300 ease-out transform scale-100 rounded-2xl hover:scale-110" />
                        <div className="absolute bottom-0 left-0 z-10 w-full p-4 lg:p-6 rounded-2xl bg-gradient-to-t from-black/70 to-black/2">
                            <p className="hidden text-white lg:font-medium lg:text-sm lg:block">{blogLists?.[1].tag_blog}</p>
                            <h1 className="mt-2 text-sm font-semibold leading-relaxed text-white lg:text-xl">{blogLists?.[1].title}</h1>
                        </div>
                    </div>
                </div>
                <div className="relative col-span-12 p-6 h-80 sm:col-span-8 lg:h-[40rem] overflow-hidden rounded-2xl cursor-pointer">
                    <img src={blogLists?.[5].photo_cover} alt="" className="absolute top-0 left-0 z-0 object-cover object-center w-full h-full overflow-hidden transition duration-300 ease-out transform scale-100 rounded-2xl hover:scale-110" />
                    <div className="absolute bottom-0 left-0 z-10 w-full p-6 lg:p-10 rounded-2xl bg-gradient-to-t from-black/70 to-black/2">
                        <p className="hidden text-lg font-medium text-white lg:block">{blogLists?.[5].tag_blog}</p>
                        <h1 className="mt-2 text-2xl font-semibold leading-relaxed text-white lg:text-5xl">{blogLists?.[1].title}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
