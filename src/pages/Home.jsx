import Blog from "./blogs/blog";


export default function Home() {
    return (
        <div>
            <div className="relative px-6 lg:h-screen pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#BEF264] to-[#0ea5e9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="py-10 sm:py-48 lg:pt-12">
                    <div className="grid w-full grid-cols-12 gap-4">
                        <div className="grid grid-cols-2 col-span-12 gap-4 overflow-hidden sm:col-span-4 sm:grid-rows-2">
                            <div className="relative h-56 sm:col-span-2 lg:h-[19.5rem] overflow-hidden z-10 rounded-2xl cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRldmVsb3BlcnxlbnwwfDB8MHx8fDI%3D" alt="" className="absolute top-0 left-0 z-0 object-cover object-center w-full h-full overflow-hidden transition duration-300 ease-out transform scale-100 rounded-2xl hover:scale-110" />
                                <div className="absolute bottom-0 left-0 z-10 w-full p-4 lg:p-6 rounded-2xl bg-gradient-to-t from-black/70 to-black/2">
                                    <p className="hidden text-white lg:font-medium lg:text-sm lg:block">Technology</p>
                                    <h1 className="mt-2 text-sm font-semibold leading-relaxed text-white lg:text-xl">Why Financial Freedom is importan for your Future</h1>
                                </div>
                            </div>
                            <div className="relative h-56 p-6 sm:col-span-2 lg:h-[19.5rem] rounded-2xl overflow-hidden cursor-pointer">
                                <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGRldmVsb3BlcnxlbnwwfDB8MHx8fDI%3D" alt="" className="absolute top-0 left-0 z-0 object-cover object-center w-full h-full overflow-hidden transition duration-300 ease-out transform scale-100 rounded-2xl hover:scale-110" />
                                <div className="absolute bottom-0 left-0 z-10 w-full p-4 lg:p-6 rounded-2xl bg-gradient-to-t from-black/70 to-black/2">
                                    <p className="hidden text-white lg:font-medium lg:text-sm lg:block">Technology</p>
                                    <h1 className="mt-2 text-sm font-semibold leading-relaxed text-white lg:text-xl">Why Financial Freedom is importan for your Future</h1>
                                </div>
                            </div>
                        </div>
                        <div className="relative col-span-12 p-6 h-80 sm:col-span-8 lg:h-[40rem] overflow-hidden rounded-2xl cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1603575448360-153f093fd0b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGRldmVsb3BlcnxlbnwwfDB8MHx8fDI%3D" alt="" className="absolute top-0 left-0 z-0 object-cover object-center w-full h-full overflow-hidden transition duration-300 ease-out transform scale-100 rounded-2xl hover:scale-110" />
                            <div className="absolute bottom-0 left-0 z-10 w-full p-6 lg:p-10 rounded-2xl bg-gradient-to-t from-black/70 to-black/2">
                                <p className="hidden text-lg font-medium text-white lg:block">Technology</p>
                                <h1 className="mt-2 text-2xl font-semibold leading-relaxed text-white lg:text-5xl">Why Financial Freedom is importan for your Future</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0ea5e9] to-[#BEF264] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

            <Blog />
        </div >
    )
}
