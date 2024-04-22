import { useNavigate } from 'react-router-dom';

type Props = {
    data: BlogData,
    size: 'normal' | 'large',
    alignment: 'vertical' | 'horizontal',
}

type BlogData = {
    id: number,
    title: string,
    description: string,
    date: string,
    image: string,
}

const BlogCard = (props: Props) => {

    const navigate = useNavigate();

    const goToBlogPost = () => {
        navigate(
            `/Blog/${props.data.id}-${props.data.title.replace(/ /g, '-')}`, 
            {
                state: { data: props.data }
            }
        )
    } 

  return (
    <button onClick={goToBlogPost} className={`${props.alignment === 'horizontal' ? 'h-36 space-x-6': 'flex-col space-y-6'} group cursor-pointer relative flex ${ props.size === 'normal' && (props.alignment === 'vertical' ? 'w-min': 'w-full blog:flex-row-reverse blog:space-x-reverse') } w-full items-center justify-start`}>
        <div className={`${props.alignment === 'horizontal' ? 'min-w-60 min-h-full blog:min-h-28 blog:min-w-40': props.size === 'normal' ? 'min-w-60 min-h-36': 'min-w-full min-h-60'} overflow-hidden relative`}>
            <img className="object-cover h-full w-full absolute top-0 left-0" src={props.data.image} />
        </div>
        <div className=" text-left space-y-3">
            <p className="text-xs text-[#606060]">{props.data.date}</p>
            <h1 className="text-xl blog:text-base text-ellipsis">{props.data.title}</h1>
            <p className={`${ props.alignment === 'vertical' ? 'line-clamp-6': 'line-clamp-3' } text-sm blog:text-xs text-ellipsis ${ props.alignment == 'vertical' && props.size == 'normal' && 'blog:hidden' }`}>{props.data.description}</p>
        </div>
        <div className={`${ props.alignment === 'vertical' ? 'group-hover:before:w-[calc(100%+2rem)] group-hover:after:h-[calc(100%-1rem)]': 'group-hover:before:w-[calc(100%+2rem)] group-hover:after:h-[calc(100%+2rem)]'} before:content-[''] before:absolute before:h-1.5 before:w-10 before:bg-primary before:-top-4 before:-right-4 after:content-[''] after:absolute after:h-10 after:w-1.5 after:bg-primary after:-top-4 after:-right-4`} />
        <div className={`${ props.alignment === 'vertical' ? 'before:bottom-8 before:-left-4 after:bottom-8 after:-left-4 group-hover:before:w-[calc(100%+2rem)] group-hover:after:h-[calc(100%-1rem)]': 'before:-bottom-4 before:-left-4 after:-bottom-4 after:-left-4 group-hover:before:w-[calc(100%+2rem)] group-hover:after:h-[calc(100%+2rem)]' } before:content-[''] before:absolute before:h-1.5 before:w-10 before:bg-primary after:content-[''] after:absolute after:h-10 after:w-1.5 after:bg-primary`} />
    </button>
  )
}

export default BlogCard
export type { BlogData }