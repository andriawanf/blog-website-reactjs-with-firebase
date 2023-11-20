/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import CardBlog from "../../components/Card-Blog";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect } from "react";
import SkeletonCard from "../../components/SkeletonCard";

export default function Blog() {

    const [blogLists, setBlogLists] = useState(null);
    const [loading, setLoading] = useState(true);
    const postRef = collection(db, "blogs-post");



    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await getDocs(postRef);
                setBlogLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("Error fetching data details: ", error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            }
        };

        getBlogs();
    }, []);

    return (
        <div className="py-24 bg-gray-100 sm:py-32">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>
                {loading ? (<SkeletonCard />) : (
                    <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 border-t border-gray-300 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {blogLists?.map((blog) =>
                            <CardBlog key={blog.id} blog={blog} />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}
