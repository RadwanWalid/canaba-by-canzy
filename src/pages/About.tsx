

const About = () => {

  const aboutCanz: string[] = ['Coffee Addict', 'Talkative', 'Producing', 'Car Lady', 'Blogs', 'Spontaneous', 'Dog Mom', 'Photography', 'Filming', 'Antiques Collector', 'Good Listener', 'Trying New Things', 'Notebooks Collector', 'Doodling', 'Movies over Series', 'Journaling']; 

  return (
    <div className="space-y-16 px-20">
      <div className="flex items-center justify-between space-x-11 mt-20">

        <div className="flex-1 h-[30rem] py-4 about-gradient rounded-xl">
          <img className="h-[26rem] py-2 mx-auto w-auto" src="/no background.png" />
        </div>

        <div className="flex-1 relative space-y-12">
          <h1 className="relative -left-40 top-6 text-6xl">So, who am I?</h1>
          <div className="carousel-container h-14">
            <div className="carousel-track border-y-4 border-primary">
              {
                aboutCanz.map((trait, index) => (
                  <h1 className="text-xl whitespace-nowrap" key={index}>{trait}</h1>
                ))
              }
            </div>
          </div>
          <p className="text-lg relative bottom-6">Fresh out of college with a degree in Digital Media in one hand and a microphone in the other, Canzy bursts onto the scene as your host. This effervescent ball of energy thrives on spontaneity and the thrill of the unexpected. But beneath the infectious enthusiasm lies a keen listener, a digital detective with a nose for exploring the hidden gems – the offbeat stories and extraordinary journeys that lie beneath the surface.</p>
        </div>
      </div>

      <hr className="border-2 mx-20" />

      <div className="relative flex items-center space-x-20">
        <div className="flex-1 space-y-5">
          <h1 className="text-2xl text-[#747474]">About the Podcast</h1>
          <p className="text-4xl">Exploring Perspectives, Adventures, and Inspirations</p>
          <p className="text-lg">We're all about diving into fascinating conversations that open your eyes to new perspectives, sharing exciting adventures that'll keep you on the edge of your seat, and telling heartwarming stories that'll lift your spirits. And guess what? We're shining a spotlight on some incredible people making a difference in our community. So, grab a snack, get comfy, and join us for some feel-good vibes and inspiring tales!</p>
        </div>
        <div className="flex items-center justify-center w-96">
          <img className="absolute top-12 h-auto w-[26rem] -scale-x-100 -rotate-45" src="/blogs/Podcast Doodle.svg" />
          <img className="h-auto w-52 relative right-3" src="/blogs/About Podcast.svg" />
        </div>
      </div>
    </div>
  )
}

export default About
