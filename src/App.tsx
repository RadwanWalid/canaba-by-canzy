import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/Blog/BlogPost'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Episodes from './pages/Episodes'

function App() {

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="/Blog/:id" element={<BlogPost />} />
            <Route path="Episodes" element={<Episodes />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
