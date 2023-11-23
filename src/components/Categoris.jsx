export default function Categories() {
    return (
        <>
            {/* Product List Section: Categories Grid */}
            <div className="bg-sky-100">
                <div className="container px-4 py-16 mx-auto lg:px-8 lg:py-32 xl:max-w-7xl">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        <div className="flex flex-col justify-center col-span-2">
                            <h1 className="font-bold leading-[5rem] text-7xl">Our Most Popular Categorys</h1>
                            <p className="w-4/5 mt-4 text-lg leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur, minus perferendis nobis deserunt numquam.</p>
                        </div>
                        <a
                            href="#"
                            className="relative block overflow-hidden transition ease-out group active:opacity-75 sm:col-span-2 md:col-span-1 md:col-start-3 rounded-2xl md:rounded-[2.5rem]"
                        >
                            <img
                                src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
                                alt="Product Image"
                                className="transition ease-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-sky-500 group-hover:text-white ">
                                    Electronics
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="relative block overflow-hidden transition ease-out group active:opacity-75 rounded-2xl md:rounded-[2.5rem]"
                        >
                            <img
                                src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg"
                                alt="Product Image"
                                className="transition ease-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-sky-500 group-hover:text-white ">
                                    Educations
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="relative block overflow-hidden transition ease-out group active:opacity-75 rounded-2xl md:rounded-[2.5rem]"
                        >
                            <img
                                src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg"
                                alt="Product Image"
                                className="transition ease-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-sky-500 group-hover:text-white ">
                                    Financials
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="relative block overflow-hidden transition ease-out group active:opacity-75 sm:col-span-2 md:col-span-1 rounded-2xl md:rounded-[2.5rem]"
                        >
                            <img
                                src="https://cdn.tailkit.com/media/placeholders/photo-ALpEkP29Eys-700x700.jpg"
                                alt="Product Image"
                                className="transition ease-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-sky-500 group-hover:text-white ">
                                    Smart Home
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="relative block overflow-hidden transition ease-out group active:opacity-75 rounded-2xl md:rounded-[2.5rem]"
                        >
                            <img
                                src="https://cdn.tailkit.com/media/placeholders/photo-164_6wVEHfI-700x700.jpg"
                                alt="Product Image"
                                className="transition ease-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-sky-500 group-hover:text-white ">
                                    Sports
                                </div>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="relative block overflow-hidden transition ease-out group active:opacity-75 rounded-2xl md:rounded-[2.5rem]"
                        >
                            <img
                                src="https://cdn.tailkit.com/media/placeholders/photo-wW7XbWYoqK8-700x700.jpg"
                                alt="Product Image"
                                className="transition ease-out transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-sky-500 group-hover:text-white ">
                                    Wearables
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* END Product List Section: Categories Grid */}
        </>
    );
}
