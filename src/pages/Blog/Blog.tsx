import BlogCard, { BlogData } from "../../components/BlogCard/BlogCard"

const blogs: BlogData[] = [
  {
    id: 1,
    title: 'Art of Connection',
    description: 'Explore the depths of human connection in the "Art of Connection" blog. Discover insights into fostering empathy, understanding, and collaboration through meaningful relationships. From friendships to social cohesion, delve into the transformative power of authentic connections. Join us on this journey of exploration, discovery, and connection.',
    date: 'April 1, 2024',
    image: '/blogs/Art of Connection.jpg'
  },
  {
    id: 2,
    title: 'Beyond the Obstacle',
    description: '',
    date: 'April 1, 2024',
    image: '/blogs/Beyond The Obstacle.svg'
  },
  {
    id: 3,
    title: 'Growth Unlocked',
    description: '',
    date: 'April 1, 2024',
    image: '/blogs/Growth Unlocked.jpg'
  },
  {
    id: 4,
    title: 'Collaboration Magic',
    description: '',
    date: 'April 1, 2024',
    image: '/blogs/Collaboration Magic.jpg'
  },
  {
    id: 5,
    title: 'Teamwork Triumphs',
    description: 'Explore the power of teamwork in the "Teamwork Triumphs" blog. Discover strategies for fostering collaboration and maximizing team performance.',
    date: 'April 1, 2024',
    image: '/blogs/Teamwork Triumphs.jpg'
  },
  {
    id: 6,
    title: 'Adaptive Advantage',
    description: "Embrace change and thrive with the 'Adaptive Advantage' blog. Gain insights into adaptability's role in navigating uncertainty and seizing opportunities.",
    date: 'April 1, 2024',
    image: '/blogs/Adaptive Advantage.jpg'
  },
]

const Blog = () => {


  return (
    <div className="relative bottom-16 pt-24">
      <div className="py-6 border-y-2 mb-8 border-[#D0D0D0]">
        <h1 className="text-9xl text-center font-bold">The Blog</h1>
        <p className="text-center text-[#606060] max-w-[52rem] mt-4 mx-auto">Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination.</p>
      </div>
      <div className="flex items-start mx-10 mt-14 space-x-20">
        <div className="flex-1 text-center relative">
          <BlogCard data={blogs[0]} size="large" alignment="vertical" />
        </div>
        <div className="flex-1 text-center space-y-16">
          {
            blogs.slice(1, 4).map((data, index) => (
              <BlogCard data={data} key={index} size="normal" alignment="horizontal" />
            ))
          }
        </div>
      </div>
      <div className="space-y-24 mt-32">
        <h1 className="text-6xl text-center font-bold">Explore Other Blogs</h1>
        <div className="flex items-start justify-center space-x-28 px-10">
          <BlogCard data={blogs[0]} size="normal" alignment="vertical" />
          {
            blogs.slice(4, blogs.length).map((data, index) => (
              <BlogCard data={data} key={index} size="normal" alignment="vertical" />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blog
export { blogs }