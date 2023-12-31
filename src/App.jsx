/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
import CreatePost from "./pages/create-blog/CreatePost";
import BlogDetails from './pages/blogs/BlogDetails';
import BlogList from './pages/blogs/BlogList';
import ContextBlogs from './context/context-blogs';



function App() {

  return (
    <div className="container font-comfortaa">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/blog/:blogId' element={<BlogDetails />} />
          <Route path='/blogs' element={<ContextBlogs><BlogList /></ContextBlogs>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
