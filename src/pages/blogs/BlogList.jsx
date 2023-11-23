import { useContext } from "react";
import { AppContext } from "../../App";

export default function BlogList() {
    const { blogLists } = useContext(AppContext);
    return (
        <section className="py-24 text-gray-900 bg-gray-100">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">From the blog</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {blogLists?.map((blog, index) =>

                        <div key={index} className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blog.photo_cover} alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href="#" className="text-xl font-semibold text-gray-800 hover:underline ">
                                    {blog.title}
                                </a>
                                <div className="text-sm text-gray-500">
                                    <p>Creator: {blog.username}</p>
                                    <p>On: 20 October 2019</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
