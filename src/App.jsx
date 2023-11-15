import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <div className='container font-comfortaa'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
