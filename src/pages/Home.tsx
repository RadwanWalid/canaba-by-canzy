import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

;

const Home = () => {

  const words1: string[] = ['Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition', 'Changing Perspectives', 'Milestones', 'Personal Jounrey', 'Inspiring Moments', 'Self Improvements', 'Overcoming Challenges', 'Personal Growth', 'Inspirational Stories'];
  const words2: string[] = ['Changing Perspectives', 'Milestones', 'Personal Jounrey', 'Inspiring Moments', 'Self Improvements', 'Overcoming Challenges', 'Personal Growth', 'Inspirational Stories', 'Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition'];
  const words3: string[] = ['Personal Jounrey', 'Inspiring Moments', 'Self Improvements', 'Overcoming Challenges', 'Personal Growth', 'Inspirational Stories', 'Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition', 'Changing Perspectives', 'Milestones'];
  const words4: string[] = ['Overcoming Challenges', 'Personal Growth', 'Inspirational Stories', 'Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition', 'Changing Perspectives', 'Milestones', 'Personal Jounrey', 'Inspiring Moments', 'Self Improvements'];

  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="space-y-32">
      <div className="flex items-center justify-center space-x-16 px-20">
        <Parallax className="flex-1 flex justify-end" translateX={['0%', '-100%']} opacity={[1, -1]} rootMargin={{ top: windowHeight <= 576 ? -400: -750, left: 0, right: 0, bottom: 0 }}>
          <img className="h-auto w-72 glitch-effect" src="/svgs/Can You Keep It Together Bold.svg" />
        </Parallax>
        <Parallax translateY={['0%', '-100%']} rootMargin={{ top: windowHeight <= 576 ? -600: -900, left: 0, right: 0, bottom: windowHeight <= 576 ? 400: 100 }} className="relative flex items-center justify-center h-[34rem] w-[34rem]">
          {/* <div className="h-96 w-96 rounded-full bg-[#0D2979]" /> */}
          <img className="h-[34rem] relative top-1 rotate-0 scale-y-110" src="/svgs/Doodling.svg" />
          <img className="absolute h-[26rem]" src="/no background.png" />
        </Parallax>
        <Parallax className="flex-1" translateX={['0%', '100%']} opacity={[1, -1]} rootMargin={{ top: windowHeight <= 576 ? -400: -750, left: 0, right: 0, bottom: 0 }}>
          <img className="h-auto w-28 glitch-effect" src="/svgs/Yes or No Bold.svg" />
        </Parallax>
      </div>

      <Parallax translateY={['-70%', '0%']} opacity={[0, 1]} rootMargin={{ top: -200, left: 0, right: 0, bottom: -500 }} className="space-y-8 text-center">
        <div className="flex items-center justify-center space-x-12">
          <h1 className="text-7xl text-primary italic uppercase font-semibold">Why</h1>
          <div className="flex items-center space-x-1">
            <img className="h-28 w-auto" src="/svgs/Title.svg" />
            <h1 className="text-7xl text-primary italic uppercase font-semibold">?</h1>
          </div>
        </div>
        <div className="space-y-4">
          <p className="mx-48">CONVERSATIONS ABOUT PERSPECTIVES, LIFE-CHANGING ADVENTURES, AND INSPIRATIONAL STORIES THAT WILL LIFT YOUR SPIRITS WHILE ALSO HIGHLIGHTING SIGNIFICANT COMMUNITY FIGURES.</p>
          <a href="/About" className="bg-[#121212] inline-block px-6 py-4 rounded-md text-white hover:bg-primary hover:shadow-md transition-all duration-300">Learn more</a>
        </div>
      </Parallax>

      <div className="flex items-center justify-between overflow-hidden">
        <Parallax className="flex-1 pl-20" rootMargin={{ top: 200, left: 0, right: 0, bottom: -400 }} translateX={['-50%', '0%']} opacity={[-1, 1]}>
          <div className="space-y-6">
            <h1 className="text-5xl">Women in Egypt<span className="text-primary italic">?</span></h1>
            <p className="text-xl">NOT AS A MATTER OF RIGHTS, BUT AS A MATTER OF RESPECT & BEHAVIOURAL CHANGE.</p>
          </div>
        </Parallax>
        <Parallax className="flex-1 pr-20 w-auto h-[29rem] aspect-square overflow-hidden relative flex items-center justify-center" rootMargin={{ top: 200, left: 0, right: 0, bottom: -550 }} translateX={['50%', '0%']} opacity={[-1, 1]}>
          <div className="w-auto h-[29rem] aspect-square overflow-hidden relative flex items-center justify-center">
            <img className="h-full absolute w-auto p-2" src="/svgs/Connection.svg" />
            <div className="opacity-10">
              {
                Array.from({ length: 3 }).map((_,index) => (
                  <div key={index}>
                    <div className="carousel-container w-screen h-10">
                      <div className="carousel-track">
                        {
                          words1.map((word, index) => (
                            <h1 className="text-xl whitespace-nowrap" key={index}>{word}</h1>
                          ))
                        }
                      </div>
                    </div>
                    <div className="carousel-container w-screen h-10">
                      <div className="carousel-track">
                        {
                          words2.map((word, index) => (
                            <h1 className="text-xl whitespace-nowrap" key={index}>{word}</h1>
                          ))
                        }
                      </div>
                    </div>
                    <div className="carousel-container w-screen h-10">
                      <div className="carousel-track">
                        {
                          words3.map((word, index) => (
                            <h1 className="text-xl whitespace-nowrap" key={index}>{word}</h1>
                          ))
                        }
                      </div>
                    </div>
                    <div className="carousel-container w-screen h-10">
                      <div className="carousel-track">
                        {
                          words4.map((word, index) => (
                            <h1 className="text-xl whitespace-nowrap" key={index}>{word}</h1>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </Parallax>
      </div>

      <div className="space-y-5 text-center w-fit relative mx-auto px-20">
        <div className="">
          <h1 className="text-7xl uppercase font-semibold">Subscribe</h1>
          <p className="mt-6">Stay in the loop! Enter your email below to get updates.</p>
        </div>
        <div className="flex items-center justify-center space-x-3 pt-6">
          <input placeholder="Enter your email" className="h-12 flex-1 min-w-[20rem] rounded-md py-1.5 pl-2 outline-none border-2 border-[#E5E5E5] hover:drop-shadow-md transition-all duration-300"/>
          <button className="bg-[#121212] px-4 py-1.5 rounded-md text-white h-11 hover:bg-primary hover:shadow-md transition-all duration-300">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;