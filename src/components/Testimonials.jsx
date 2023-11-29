import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Testimonials() {
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setReviews(response.data.slice(0, 7));
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchData();
    }, []);
    
    return (
        <div className="relative">
            <div
                className="absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[55deg] bg-gradient-to-tr from-[#BEF264] to-[#0ea5e9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="container px-4 py-16 mx-auto lg:px-8 lg:py-32 xl:max-w-7xl">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-lg font-semibold leading-8 text-center text-sky-500 md:text-2xl">
                        Testimonials
                    </h2>
                    <h1 className="font-bold leading-[3.5rem] text-5xl text-center max-w-4xl mt-4">We have hang  out with thousands of amazing creators</h1>
                </div>
                <div className="grid w-full grid-cols-1 gap-4 mt-20 sm:grid-cols-2 md:grid-cols-4">
                    {reviews?.map((data, index) => (
                        <div key={data.id} className={index === 1 ? 'relative block p-4 bg-gray-200 lg:p-6 sm:col-span-2 md:col-span-2 rounded-2xl overflow-hidden' : "relative block p-4 bg-gray-200 lg:p-6 sm:col-span-2 md:col-span-1 rounded-2xl overflow-hidden"}>
                            <p className={index === 1 ? "lg:text-lg lg:font-bold leading-7" : "leading-6 text-sm font-medium pb-20"}>&quot; {data.body} &quot;</p>
                            <div className="absolute bottom-0 left-0 flex items-center justify-start w-full p-4 mt-6 lg:p-6">
                                <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div className="ml-3 text-sm font-bold">
                                    <h2>Andriawan Firmansyah</h2>
                                    <p className="mt-1 text-gray-500">@andrifsyah</p>
                                </div>
                            </div>
                        </div>

                    ))}
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
    )
}
