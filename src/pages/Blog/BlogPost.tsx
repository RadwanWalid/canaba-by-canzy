import { useParams } from 'react-router-dom';

type Props = {}

const BlogPost = (props: Props) => {
    const { id } = useParams();
  return (
    <div>BlogPost {id}</div>
  )
}

export default BlogPost