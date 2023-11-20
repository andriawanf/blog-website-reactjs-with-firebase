import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../config/firebase';
import SkeletonBlog from "../../components/SkeletonBlog";

export default function BlogDetails() {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const blogDoc = await getDoc(doc(db, 'blogs-post', blogId));
                if (blogDoc.exists()) {
                    setBlog(blogDoc.data());
                } else {
                    console.error('blog not found');
                }
            } catch (error) {
                console.error('Error fetching data blog details: ', error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1500)
            }
        };
        fetchBlog();
    }, [blogId]);

    if (loading) {
        return <SkeletonBlog />
    }

    if (!blog) {
        return <p>Blog Not Found!</p>;
    }

    return (
        <div className="relative px-6 py-24 overflow-hidden bg-white sm:py-32 lg:overflow-visible lg:px-40">
            <div className="absolute inset-0 overflow-hidden -z-10">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-300 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="flex flex-col max-w-full">
                <div className="w-full text-center">
                    <p className="text-base font-semibold leading-7 text-sky-500">{blog.tag_blog}</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">{blog.title}</h1>
                </div>
                <div className="mt-6 lg:mt-11">
                    <img className="w-full bg-gray-900 shadow-xl max-w-full rounded-3xl ring-1 ring-gray-400/10 lg:h-[32rem] object-cover" src={blog.photo_cover} alt="" />
                </div>
                <div className="max-w-xl mt-6 text-base leading-7 text-gray-900 lg:max-w-full lg:mt-11 ">
                    <p>
                        {blog.description}
                    </p>
                </div>
                <div className="flex flex-col mt-10">
                    <h1 className="text-sm lg:text-base">Creator:</h1>
                    <div className="flex items-center mt-2">
                        <img
                            className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <span className="ml-2 text-xs lg:text-base">{blog.username}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
