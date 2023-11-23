import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from '../../config/firebase';
import SkeletonBlog from "../../components/SkeletonBlog";
import { LinkIcon } from '@heroicons/react/24/solid';
import ReactMarkdown from 'react-markdown';

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

    return (
        <>
            {loading ? (<SkeletonBlog />) : (
                <div className="relative px-6 py-24 bg-gray-100 sm:py-24 sm:overflow-hidden">
                    <div className="absolute left-0 z-0 w-full px-8 top-24">
                        <img src={blog.photo_cover} alt="" className="object-cover w-full rounded-2xl h-80 lg:h-[32rem] lg:rounded-3xl" />
                    </div>
                    <div className="relative w-full">
                        <div className="w-full px-0 pt-40 lg:pt-96 lg:px-28">
                            <div className="z-10 p-6 bg-gray-100 lg:p-10 rounded-3xl">
                                <p className="px-4 py-1.5 bg-sky-500 text-white text-xs lg:text-base font-semibold w-fit rounded-lg">{blog.tag_blog}</p>
                                <h1 className="mt-2 lg:mt-4 text-2xl lg:text-5xl font-bold leading-relaxed lg:leading-[4rem]">{blog.title}</h1>
                                <div className="flex items-center justify-between mt-6">
                                    <div className="flex items-center">
                                        <img
                                            className="inline-block w-8 h-8 rounded-full lg:h-12 lg:w-12 ring-2 ring-white"
                                            src={blog.foto_user}
                                            alt=""
                                        />
                                        <div className="ml-2 lg:ml-4">
                                            <h1 className="text-xs font-bold lg:text-lg">{blog.username}</h1>
                                            <p className="mt-0 text-xs font-medium text-gray-500 lg:mt-1 lg:text-md">{blog.created_at}</p>
                                        </div>
                                    </div>
                                    <LinkIcon className="w-4 h-4 text-gray-900 cursor-pointer lg:w-7 lg:h-7" />
                                </div>
                                <div className="mt-10 lg:mt-12">
                                    <ReactMarkdown className="font-medium leading-relaxed text-gray-900 text-md lg:leading-8 lg:text-base">{blog.description}</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
