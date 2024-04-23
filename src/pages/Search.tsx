import { useLocation, useNavigate } from "react-router-dom";
import { BlogData } from "../components/BlogCard/BlogCard";

const Search = () => {
    const navigate = useNavigate();
    const data: any[] = useLocation().state.data;

    const goToBlogPost = (item: BlogData) => {
        navigate(
            `/Blog/${item.id}-${item.title.replace(/ /g, '-')}`, 
            {
                state: { data: item }
            }
        )
    }

  return (
    <div className="grid grid-cols-4 gap-10">
        {
            data.map((item, index) => (
                item.path ? 
                <div key={index} onClick={() => navigate(item.path)}>
                    <h1>{item.path.substring(1, item.path.length)}</h1>
                    <p className="line-clamp-3 text-ellipsis">{item.matchedData.join(', ')}</p>
                </div>:

                <button key={index} onClick={() => goToBlogPost(item)}>
                    <h1>{item.title}</h1>
                    <p className="line-clamp-3 text-ellipsis">{item.description}</p>
                </button>
            ))
        }
    </div>
  )
}

export default Search