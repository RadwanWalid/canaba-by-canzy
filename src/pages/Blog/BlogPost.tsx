import { useParams } from 'react-router-dom';



const BlogPost = () => {
    const { id } = useParams();
  return (
    <div>BlogPost {id}</div>
  )
}

export default BlogPost