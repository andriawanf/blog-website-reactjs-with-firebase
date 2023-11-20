/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


export default function CardBlog({ blog }) {
    return (
        <article className="flex flex-col items-start justify-between max-w-xl p-6 bg-white shadow-lg rounded-3xl">
            <img src={blog.photo_cover} alt="" className="w-full mb-2 bg-cover h-44 rounded-xl"/>
            <div className="flex items-center text-xs gap-x-4">
                <time dateTime="2020-03-16" className="text-gray-500">{blog.created_at}</time>
                <a href="#" className="relative rounded-full bg-blue-100 px-3 py-1.5 font-medium text-blue-500 hover:bg-gray-100">{blog.tag_blog}</a>
            </div>
            <div className="relative group">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-500">
                    <Link  to={`/blog/${blog.id}`}>
                        <span className="absolute inset-0"></span>
                        {blog.title}
                    </Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{blog.description}</p>
            </div>
            <div className="relative flex items-center mt-8 gap-x-4">
                <img src={blog.foto} alt="" className="w-10 h-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <a href="#">
                            <span className="absolute inset-0"></span>
                            {blog.username}
                        </a>
                    </p>
                    <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
            </div>
        </article>
    )
}
