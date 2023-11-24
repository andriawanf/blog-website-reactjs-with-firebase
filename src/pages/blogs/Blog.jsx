/* eslint-disable react-hooks/exhaustive-deps */

import CardBlog from "../../components/Card-Blog";
import SkeletonCard from "../../components/SkeletonCard";
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useContext } from "react";
import { AppContext } from "../../context/context-blogs";

export default function Blog() {
    const {blogLists, IsLoading} = useContext(AppContext);
    

    return (
        <div className="py-24 bg-gray-100">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="flex flex-col w-full mx-auto lg:mx-0 lg:flex-row lg:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:leading-[3.5rem] sm:font-bold sm:text-5xl sm:max-w-sm">Our most popular blogs</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600 sm:max-w-lg">The latest news, tips, and advice to help you run your knowledge with less fuss.</p>
                    </div>
                    <a href="#" className="flex justify-center px-3 py-2 mt-6 text-sm font-medium text-white sm:py-3 sm:self-end rounded-xl bg-sky-500 sm:px-4 sm:text-base hover:bg-sky-600 group">
                        <button>Read All Blogs</button>
                        <ArrowLongRightIcon className="w-6 h-6 ml-1 group-hover:ml-2"/>
                    </a>
                </div>
                {IsLoading ? (<SkeletonCard />) : (
                    <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-300 gap-x-8 gap-y-8 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {blogLists?.map((blog) =>
                            <CardBlog key={blog.id} blog={blog} />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
