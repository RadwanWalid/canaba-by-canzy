import { useLocation } from 'react-router-dom';
import { BlogData } from '../../components/BlogCard/BlogCard';
import { LuRepeat2 } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";

const BlogPost = () => {
    const data: BlogData = useLocation().state.data;
  return (
    <div className="flex-col space-y-6 relative flex w-full items-center justify-start">
        <div className="min-w-full flex items-end min-h-[28rem] sm-max:min-h-72 overflow-hidden relative">
            <img className="object-cover h-full w-full absolute top-0 left-0" src={data.image} />
            <div className='w-full h-full bg-gradient-to-t from-black to-[#00000090] absolute top-0 left-0' />
            <div className='absolute bottom-10 text-white w-full text-center space-y-4'>
                <h1 className="text-7xl sm-max:text-5xl text-ellipsis">{data.title}</h1>
                <p className="text-[#606060]">{data.date}</p>
              </div>
        </div>
        <div className="w-full text-left px-24 sm-max:px-14">
            <p className="leading-[2.25]">{data.description}</p>
          <div className='flex items-center justify-start space-x-4 mt-8 ml-4 sm-max:flex-col sm-max:space-x-0 sm-max:items-start sm-max:space-y-4'>
            <button className='group text-[#2C3338] flex items-center space-x-2 border-[1.5px] border-[#CFCFCF] hover:border-[#B7B7B7] hover:shadow-md py-2 px-4 text-sm rounded-md transition-all duration-300'>
              <LuRepeat2 className='h-5 w-5 group-hover:text-primary' />
              <span>Reblog</span>
            </button>
            <button className='group text-[#2C3338] flex items-center space-x-2 border-[1.5px] border-[#CFCFCF] hover:border-[#B7B7B7] hover:shadow-md py-2 px-4 text-sm rounded-md transition-all duration-300'>
              <IoIosStarOutline className='h-5 w-5 group-hover:text-primary' />
              <span>Like</span>
            </button>
            <p className='font-light text-xs text-[#5D5D5D]'>Be the first to like this.</p>
          </div>
        </div>
    </div>
  )
}

export default BlogPost