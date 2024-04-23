import BlogCard, { BlogData } from "../../components/BlogCard/BlogCard"

const blogs: BlogData[] = [
  {
    id: 1,
    title: 'Finding My Niche',
    description: 'Creating a unique podcast intrigued me. I aimed to build a space where untold stories could find a voice. Questions arose: Who would share these stories? What tales would they tell? The idea of exposure made me hesitant. Consequently, I settled on audio-only content, focusing on the power of voices.',
    date: 'April 18, 2024',
    image: '/images/IMG_0124.JPG'
  },
  {
    id: 2,
    title: 'Inspiration from Personal Experiences',
    description: "My graduation project coincided with this dream, marking a challenging two-year period filled with introspection. Despite the hurdles, my family, especially my mother, stood by me. Observing her entrepreneurial journey, facing societal pressures, and lack of support, I felt a calling. This shaped my podcast's mission: empowering women, particularly those in Arab countries, to share their narratives",
    date: 'April 18, 2024',
    image: '/images/IMG_0132.JPG'
  },
  {
    id: 3,
    title: 'Creating a Welcoming Platform',
    description: 'I envisioned a sanctuary for these stories—a place where listeners feel at home, encouraged to embrace vulnerability. Hence, "home" became a recurring theme. Warm colors, cozy furniture, and familiar scents create an ambiance of comfort and honesty.',
    date: 'April 18, 2024',
    image: '/images/WhatsApp Image 2024-03-15 at 16.16.11.jpeg'
  },
  {
    id: 4,
    title: 'The Evolution of the Project',
    description: 'The project evolved as I envisioned a platform where guests could share their survival and growth stories. I researched women from Arab countries—divorcees, widows, entrepreneurs in their early 30s, and those living abroad. I crafted questions that would encourage them to open up.',
    date: 'April 18, 2024',
    image: '/images/Screenshot 2024-04-21 at 12.51.31 AM.png'
  },
  {
    id: 5,
    title: 'Trials and Lessons',
    description: "My first attempt was challenging. Technical issues with cameras led to a reshoot, pushing me to seek professionalism while maintaining authenticity. Though initially rejected for branding, it proved beneficial, refining the project's identity. I also relocated to a venue that resonated with the project's essence.",
    date: 'April 18, 2024',
    image: '/images/IMG_0123.JPG'
  },
  {
    id: 6,
    title: 'Introducing Canababycanzy',
    description: `The project transitioned from focusing solely on Arab women to a broader platform called "Canaba" or "Couch" in Arabic. The brand's royal blue color symbolizes this shift, reflecting the podcast's identity. My graduation project's digital campaign and family archive didn't align with this new direction, so I shifted my focus to the podcast and its accompanying website.`,
    date: 'April 18, 2024',
    image: '/images/IMG_4213.jpg'
  },
  {
    id: 7,
    title: "The Podcast's First Season",
    description: `My first season's theme remained inspired by Arab women. However, reaching out across the MENA region proved challenging due to time constraints. After contacting 150 women, 10 responded—each bringing a unique perspective from various industries.
    With the support of friends in cinematography, art direction, production, and editing, I was able to move forward. By week 10, I was set to launch across social platforms, filming four diverse episodes in week 11.
    `,
    date: 'April 18, 2024',
    image: '/images/DSC07101.jpg'
  },
  {
    id: 8,
    title: 'In Conclusion',
    description: `Canaba offers relaxed conversations on life's ups and downs, transformative journeys, and inspiring tales that uplift while spotlighting noteworthy community figures.
    This podcast has been a labor of love and learning. Each step, from conceptualization to execution, has been a lesson in perseverance and adaptability. The challenges faced, whether technical or logistical, have only strengthened my resolve to create a platform that resonates with its audience.
    `,
    date: 'April 18, 2024',
    image: '/images/batoul.png'
  },
  {
    id: 9,
    title: 'Audience Engagement',
    description: `Targeting an audience ranging from 20s to 50s, primarily women in Egypt, has been both rewarding and enlightening. Their feedback and support have been instrumental in shaping the podcast's direction. Engaging with them has provided valuable insights into their preferences, ensuring that the content remains relevant and relatable.`,
    date: 'April 18, 2024',
    image: '/images/DSC03450.JPG'
  },
  {
    id: 10,
    title: 'Future Aspirations',
    description: `Looking ahead, I aim to expand the podcast's reach across the MENA region, connecting with women from diverse backgrounds and experiences. I also plan to delve deeper into topics that resonate with the audience, fostering a community where listeners can share their stories and connect with others.
    In conclusion, Canaba is more than just a podcast; it's a platform for empowerment, inspiration, and community building. As I continue this journey, I invite you to join me, share your stories, and be part of this exciting adventure.
    `,
    date: 'April 18, 2024',
    image: '/images/DSC07154.png'
  },
]

const Blog = () => {


  return (
    <div className="relative bottom-16 pt-24">
      <div className="py-6 border-y-2 mb-8 border-[#D0D0D0] mx-4">
        <h1 className="text-9xl text-center font-bold blogsm:text-6xl">The Blog</h1>
        <p className="text-center text-[#606060] max-w-[52rem] blogsm:text-xs mt-4 mx-auto">Starting this podcast platform has been a dream nurtured over two years. It's been a journey filled with highs and lows, showcasing resilience, self-discovery, and the allure of storytelling.</p>
      </div>
      <div className="flex items-start mx-10 blog:mx-5 mt-14 space-x-20 blog:flex-col blog:space-x-0 blog:space-y-10">
        <div className="flex-1 text-center relative">
          <BlogCard data={blogs[0]} size="large" alignment="vertical" />
        </div>
        <div className="flex-1 text-center space-y-16 w-full">
          {
            blogs.slice(1, 4).map((data, index) => (
              <BlogCard data={data} key={index} size="normal" alignment="horizontal" />
            ))
          }
        </div>
      </div>
      <div className="space-y-24 blog:space-y-10 blog:mt-20 mt-32 flex flex-col justify-center items-center">
        <h1 className="text-6xl blogsm:text-4xl text-center font-bold">Explore Other Blogs</h1>
        <div className="grid grid-cols-3 blog:grid blog:grid-cols-2 gap-20 blogsm:grid-cols-1 blog:space-x-0">
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