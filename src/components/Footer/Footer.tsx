import { FaFacebookF, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-around space-x-8 min-h-[16rem] bg-[#E0E0E0] mt-14">
      {/* <img className="w-full h-auto absolute -top-10 scale-x-105 -right-56 -rotate-12 z-0" src="/svgs/Abstract Lines.svg" /> */}
        <a href="/">
          <img className="h-28 w-auto" src="/svgs/Title (Decorated).svg" alt="Title" />
        </a>
        <div className="flex items-center justify-center space-x-12">
          <a className="group" href="/">
            <FaFacebookF className="h-10 w-10 group-hover:bg-transparent border-2 border-primary text-[#E0E0E0] hover:text-primary rounded-full bg-primary flex items-center justify-center p-2 hover:drop-shadow-lg hover:scale-110 transition-all duration-300" />          </a>
          <a className="group" href="https://www.youtube.com/channel/UC6TjMcBP4eAl_qYrX1pwtVA">
            <FaYoutube className="h-10 w-10 group-hover:bg-transparent border-2 border-primary text-[#E0E0E0] hover:text-primary rounded-full bg-primary flex items-center justify-center p-2 hover:drop-shadow-lg hover:scale-110 transition-all duration-300" />          </a>
          <a className="group" href="/">
            <FaTiktok className="h-10 w-10 group-hover:bg-transparent border-2 border-primary text-[#E0E0E0] hover:text-primary rounded-full bg-primary flex items-center justify-center p-2 hover:drop-shadow-lg hover:scale-110 transition-all duration-300" />          </a>
          <a className="group" href="https://www.instagram.com/canaba.bc/" target="_blank" >
            <FaInstagram className="h-10 w-10 group-hover:bg-transparent border-2 border-primary text-[#E0E0E0] hover:text-primary rounded-full bg-primary flex items-center justify-center p-2 hover:drop-shadow-lg hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      {/* <div className="flex flex-col items-start space-y-7 relative top-4">

      </div> */}

      {/* <div className="flex items-center justify-center space-x-20">
        <a href="/About" className="text-sm pt-px h-fit rounded-full border-black w-fit mr-6 whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">About</a>
        <a href="/Blog" className="text-sm pt-px h-fit rounded-full border-black w-fit mr-6 whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">Blog</a>
        <a href="/Gallery" className="text-sm pt-px h-fit rounded-full border-black w-fit mr-6 whitespace-nowrap z-10 relative transition-all duration-300 after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-0.5 after:bg-primary after:transition-all after:duration-500 hover:after:opacity-100 after:opacity-100 after:scale-0 after:origin-center hover:after:scale-100 items-center justify-center block">Gallery</a>
      </div> */}
      
      {/* <div className="space-y-0 relative left-4">
        <div className="relative top-1">
          <h1 className="text-5xl uppercase font-semibold">Subscribe</h1>
          <p className="mt-4 text-sm">Enter your email below to get updates.</p>
        </div>
        <div className="flex items-center justify-center space-x-3 pt-6">
          <input placeholder="Enter your email" className="text-sm h-12 flex-1 rounded-md py-1.5 pl-2 outline-none border-2 border-[#E5E5E5] hover:drop-shadow-md transition-all duration-300"/>
          <button className="bg-[#121212] px-4 py-1.5 rounded-md text-sm text-white h-11 hover:bg-primary hover:shadow-md transition-all duration-300">Submit</button>
        </div>
      </div> */}
    </div>
  )
}

export default Footer