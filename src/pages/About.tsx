

const About = () => {

  const aboutCanz: string[] = ['Coffee Addict', 'Talkative', 'Producing', 'Car Lady', 'Blogs', 'Spontaneous', 'Dog Mom', 'Photography', 'Filming', 'Antiques Collector', 'Good Listener', 'Trying New Things', 'Notebooks Collector', 'Doodling', 'Movies over Series', 'Journaling']; 

  return (
    <div className="flex items-center justify-between px-20 space-x-11 mt-20">

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
  )
}

export default About
