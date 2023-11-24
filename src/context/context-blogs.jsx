/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";


export const AppContext = createContext();

export default function ContextBlogs({ children }) {
    const [blogLists, setBlogLists] = useState(null);
    const postRef = collection(db, "blogs-post");
    const [IsLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const data = await getDocs(postRef);
                setBlogLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            } catch (error) {
                console.error("Error fetching data details: ", error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            }
        };
        getBlogs();
    }, []);
    return (
        <AppContext.Provider value={{ blogLists, IsLoading, setBlogLists, setIsLoading }} >
            {children}
        </AppContext.Provider>
    )
}
