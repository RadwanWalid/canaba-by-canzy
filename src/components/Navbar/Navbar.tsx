import { useState } from "react"
import { IoSearch } from "react-icons/io5";

const Navbar = () => {

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between pt-4 mb-2 h-14 px-12 z-50 relative">
      <div className="flex-1 relative flex items-center h-10 hover:drop-shadow-sm transition-all duration-300">
        <button onClick={() => setIsSearchOpen(!isSearchOpen)} className={`h-10 w-10 p-1 ${ isSearchOpen ? 'rounded-l-md': 'rounded-md' } bg-[#121212] hover:bg-primary transition-all duration-300`}>
          <IoSearch className="text-white h-full w-full" />
        </button>
        <input placeholder="Search" className={`${ !isSearchOpen ? 'w-0 pl-0 border-0': 'w-52 pl-2 border-2'} h-10 rounded-r-md py-1.5 outline-none border-l-0 border-[#E5E5E5] transition-all duration-300`} />
      </div>
      <a href="/" className="flex-1">
        <img className="h-10 w-auto mx-auto" src="/svgs/Title.svg" alt="Title" />
      </a>
      <div className="flex-1 flex items-center justify-end space-x-12">
        <a href="/About" className="text-sm pt-px h-fit rounded-full w-fit whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">About</a>
        <a href="/Blog" className="text-sm pt-px h-fit rounded-full w-fit whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">Blog</a>
        <a href="/Gallery" className="text-sm pt-px h-fit rounded-full w-fit whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">Gallery</a>
      </div>
    </div>
  )
}

export default Navbar