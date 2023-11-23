/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
import CreatePost from "./pages/create-blog/CreatePost";
import BlogDetails from './pages/blogs/BlogDetails';
import BlogList from './pages/blogs/BlogList';
import { createContext, useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from './config/firebase';

export const AppContext = createContext();

function App() {
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
    <AppContext.Provider value={{ blogLists, IsLoading, setBlogLists, setIsLoading }} className='container font-comfortaa'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/blog/:blogId' element={<BlogDetails />} />
          <Route path='/blogs' element={<BlogList />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  )
}

export default App
