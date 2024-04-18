import { useLocation } from 'react-router-dom';
import { BlogData } from '../../components/BlogCard/BlogCard';
import { LuRepeat2 } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";

const BlogPost = () => {
    const data: BlogData = useLocation().state.data;
  return (
    <div className="flex-col space-y-6 relative flex w-full items-center justify-start">
        <div className="min-w-full flex items-end min-h-[28rem] overflow-hidden relative">
            <img className="object-cover h-full w-full absolute top-0 left-0" src={data.image} />
            <div className='w-full h-full bg-gradient-to-t from-black to-transparent absolute top-0 left-0' />
            <div className='absolute bottom-10 text-white w-full text-center space-y-4'>
                <h1 className="text-7xl text-ellipsis">{data.title}</h1>
                <p className="text-[#606060]">{data.date}</p>
              </div>
        </div>
        <div className="w-full text-left px-24">
            <p className="leading-[2.25]">The "Art of Connection" blog delves into the intricate and multifaceted world of human connection. Through insightful articles, thought-provoking essays, and inspiring anecdotes, we explore the various dimensions of connection – from interpersonal relationships to the bonds we share with our communities and the world at large.
              <br />
              In this blog, we uncover the importance of genuine connections in fostering empathy, understanding, and collaboration. We examine the role of communication, vulnerability, and active listening in nurturing meaningful relationships and building bridges across diverse perspectives.
              <br />
              From exploring the dynamics of friendships and romantic partnerships to delving into the power of empathy in fostering social cohesion, "Art of Connection" offers readers a deeper understanding of the human experience and the transformative potential of authentic connections.
              <br />
              Whether you're seeking advice on navigating interpersonal relationships, looking for inspiration to cultivate deeper connections in your life, or simply curious about the intricacies of human connection, "Art of Connection" is your guide to unlocking the artistry of genuine and fulfilling relationships. Join us on this journey of exploration, discovery, and connection.
            {data.description}</p>
          <div className='flex items-center justify-start space-x-4 mt-8 ml-4'>
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