import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/Blog/BlogPost'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Gallery from './pages/Gallery'

function App() {

  return (
    <ParallaxProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="/Blog/:id" element={<BlogPost />} />
            <Route path="Gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </ParallaxProvider>
  )
}

export default App
