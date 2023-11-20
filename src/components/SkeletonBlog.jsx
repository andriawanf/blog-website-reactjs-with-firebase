
export default function SkeletonBlog() {
    return (
        <div className="relative px-6 py-24 bg-gray-100 sm:py-32 lg:px-40">
            <div className="flex flex-col max-w-full">
                <div className="flex flex-col items-center justify-center w-full">
                    <p className="w-24 h-5 mt-4 bg-gray-200 rounded-lg lg:h-6"></p>
                    <h1 className="w-56 h-5 mt-4 bg-gray-200 rounded-lg lg:h-6 lg:w-[26rem]"></h1>
                </div>
                <div className="mt-6 lg:mt-11">
                    <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-300 lg:h-96"></div>
                </div>
                <div className="max-w-xl mt-6 text-base leading-7 text-gray-900 lg:max-w-full lg:mt-11 ">
                    <h1 className="h-5 mt-4 bg-gray-200 rounded-lg w-72 lg:h-6 lg:w-full"></h1>
                    <h1 className="w-48 h-5 mt-4 bg-gray-200 rounded-lg lg:h-6 lg:w-[50rem]"></h1>
                    <h1 className="w-64 h-5 mt-4 bg-gray-200 rounded-lg lg:h-6 lg:w-[60rem]"></h1>
                </div>
                <div className="flex flex-col mt-10">
                    <p className="w-24 h-5 mt-4 bg-gray-200 rounded-lg lg:h-6 lg:w-32"></p>
                    <div className="flex items-center mt-2">
                        <h1 className="w-32 h-5 mt-4 bg-gray-200 rounded-lg lg:h-6 lg:w-52"></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
