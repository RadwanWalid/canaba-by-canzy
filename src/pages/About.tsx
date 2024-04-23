import { useEffect, useState } from "react";


const About = () => {

  const aboutCanz: string[] = ['Coffee Addict', 'Talkative', 'Producing', 'Car Lady', 'Blogs', 'Spontaneous', 'Dog Mom', 'Photography', 'Filming', 'Antiques Collector', 'Good Listener', 'Trying New Things', 'Notebooks Collector', 'Doodling', 'Movies over Series', 'Journaling']; 

  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % aboutCanz.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [aboutCanz, 1000]);

  return (
    <div className="space-y-16 px-20 blog:px-12">
      <div className="flex items-center justify-between space-x-11 mt-20 blog:mt-14 blog:flex-col blog:space-x-0">

        <div className="flex flex-1 relative">
          <div className="flex-1 h-fit relative py-4 overflow-hidden rounded-xl">
            <div className="about-gradient -z-10 absolute top-0 left-0 right-0 bottom-0" />
            <img className="h-auto py-2 mx-auto min-w-full" src="/no background.png" />
          </div>
          <h1 className="absolute -right-80 top-2 text-6xl blog:-right-9 blog:-indent-8 blog:-top-12 blog:text-3xl">So, <br className="hidden blog:block" /> who am I?</h1>
        </div>

        <div className="flex-1 relative space-y-12 pt-32 blog:pt-0">
          <div className="blog:block text-center py-2 hidden border-y-4 border-primary">
            <h1 className="text-lg">{aboutCanz[currentWordIndex]}</h1>
          </div>
          <div className="carousel-container h-12 blog:hidden">
            <div className="carousel-track border-y-4 border-primary">
              {
                aboutCanz.map((trait, index) => (
                  <h1 className="text-xl blog:text-lg whitespace-nowrap" key={index}>{trait}</h1>
                ))
              }
            </div>
          </div>
          <p className="text-lg blog:text-base relative bottom-6">Fresh out of college with a degree in Digital Media in one hand and a microphone in the other, Canzy bursts onto the scene as your host. This effervescent ball of energy thrives on spontaneity and the thrill of the unexpected. But beneath the infectious enthusiasm lies a keen listener, a digital detective with a nose for exploring the hidden gems – the offbeat stories and extraordinary journeys that lie beneath the surface.</p>
        </div>
      </div>

      <hr className="border-2 mx-20 blog:mx-0" />

      <div className="relative flex items-center space-x-20">
        <div className="flex-1 space-y-5">
          <h1 className="text-2xl blog:text-lg text-[#747474]">About the Podcast</h1>
          <p className="text-4xl blog:text-2xl">Exploring Perspectives, Adventures, and Inspirations</p>
          <p className="text-lg blog:text-sm">We're all about diving into fascinating conversations that open your eyes to new perspectives, sharing exciting adventures that'll keep you on the edge of your seat, and telling heartwarming stories that'll lift your spirits. And guess what? We're shining a spotlight on some incredible people making a difference in our community. So, grab a snack, get comfy, and join us for some feel-good vibes and inspiring tales!</p>
        </div>
        <div className="flex items-center justify-center w-96 relative blog:w-full blog:absolute blog:top-0 blog:-z-10">
          <img className="absolute -top-12 blog:top-4 blog:right-10 h-auto w-[26rem] min-w-[26rem] blog:w-32 blog:min-w-32 -scale-x-100 -rotate-45" src="/blogs/Podcast Doodle.svg" />
          <img className="h-auto w-52 min-w-52 blog:w-16 blog:min-w-16 blog:left-8 blog:top-7 relative right-3" src="/blogs/About Podcast.svg" />
        </div>
      </div>
    </div>
  )
}

export default About
