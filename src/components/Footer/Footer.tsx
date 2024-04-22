import { FaFacebookF, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-around space-x-8 min-h-[16rem] bg-[#E0E0E0] mt-14 px-4">
        <a href="/">
          <img className="h-28 w-auto" src="/svgs/Title (Decorated).svg" alt="Title" />
        </a>
        <div className="flex items-center justify-center space-x-12 sm-max:grid sm-max:grid-cols-2 sm-max:gap-8 sm-max:space-x-0">
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
    </div>
  )
}

export default Footer