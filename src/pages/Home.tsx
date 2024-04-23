import { useEffect, useRef, useState } from "react";

const Home = () => {

  const words1: string[] = ['Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition', 'Changing Perspectives', 'Milestones', 'Personal Jounrey', 'Inspiring Moments', 'Self Improvements', 'Overcoming Challenges', 'Personal Growth', 'Inspirational Stories'];
  const words2: string[] = ['Changing Perspectives', 'Milestones', 'Personal Jounrey', 'Inspiring Moments', 'Self Improvements', 'Overcoming Challenges', 'Personal Growth', 'Inspirational Stories', 'Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition'];
  const words3: string[] = ['Personal Jounrey', 'Inspiring Moments', 'Self Improvements', 'Overcoming Challenges', 'Personal Growth', 'Inspirational Stories', 'Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition', 'Changing Perspectives', 'Milestones'];
  const words4: string[] = ['Overcoming Challenges', 'Personal Growth', 'Inspirational Stories', 'Authenticity', 'Uplifting', 'Creativity', 'Support', 'Ambition', 'Changing Perspectives', 'Milestones', 'Personal Jounrey', 'Inspiring Moments', 'Self Improvements'];

  const landingRef = useRef<HTMLDivElement>(null);
  const whyCanabaRef = useRef<HTMLDivElement>(null);
  const womenInEgyptRef = useRef<HTMLDivElement>(null);

  const [isImageReady, setIsImageReady] = useState<boolean>(false);
  const [offsetY, setOffsetY] = useState<number>(window.scrollY);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleScroll = () => setOffsetY(window.scrollY);
  const handleResize = () => setWidth(window.innerWidth);

  useEffect(() => {
      const img = new Image();
      img.onload = () => {
          setIsImageReady(true);
      }
      img.src = "/images/no background.png";
  }, [])


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div className="space-y-24">

      <section ref={landingRef} className="flex items-start justify-center relative h-[32rem] blog:h-96 blog:-mt-12 w-screen">
        <div style={{ transform: `translateX(-${(offsetY * 0.8) + (width <= 946 ? 0: 80)}px) ${ width <= 946 ? 'rotate(30deg)': 'rotate(0deg)' }`, opacity: `${ (100 - (offsetY * 0.25)) / 100 }` }} className="relative flex-1 blog:flex-none blog:absolute blog:left-4 top-20 blog:top-14 flex justify-end z-10">
          <img className="h-auto w-72 blog:w-24 aspect-square glitch-effect" src="/svgs/Can You Keep It Together Bold.svg" />
        </div>
        <div style={{ transform: `translateY(-${offsetY * 0.9}px)` }} className="relative flex-1 flex items-center justify-center blog:mx-4">
          <img className="h-[34rem] relative top-1 rotate-0 scale-y-110 blog:h-[28rem] blog:left-1.5 blog:top-3 blog:scale-[0.85]" src="/svgs/Doodling.svg" />
          {
              !isImageReady ? <span className="loader absolute after:border-[#161FFF_transparent]" />:
            <img className="absolute scale-125 blog:w-72" src="/images/no background.png" />
          }
        </div>
        <div style={{ transform: `translateX(${(offsetY * 0.8) + (width <= 946 ? 0: 90)}px) ${ width <= 946 ? 'rotate(-30deg)': 'rotate(0deg)' }`, opacity: `${ (100 - (offsetY * 0.25)) / 100 }` }} className="relative flex-1 blog:flex-none blog:absolute blog:-right-3 top-20 blog:top-4 flex justify-start z-10">
          <img className="h-auto w-72 blog:w-32 aspect-square glitch-effect" src="/svgs/Yes or No Bold.svg" />
        </div>
      </section>

      <div ref={whyCanabaRef} style={{ transform: `translateY(${ -(offsetY * 0.9) + 100}px)`, opacity: `${(whyCanabaRef.current && whyCanabaRef.current?.getBoundingClientRect().top < 500) ? (((offsetY - Math.abs(whyCanabaRef.current?.getBoundingClientRect().top) + 250) * 0.5)) / 100: 0}` }} className="space-y-8 blog:space-y-4 text-center h-16">
        <div className="text-7xl blog:text-5xl flex items-center justify-center space-x-12 blog:space-x-6">
          <h1 className="text-primary italic uppercase font-semibold">Why</h1>
          <div className="flex items-center space-x-1">
            <img className="h-28 blog:h-16 w-auto" src="/svgs/Title.svg" />
            <h1 className="text-primary italic uppercase font-semibold">?</h1>
          </div>
        </div>
        <div className="space-y-4">
          <p className="mx-48 blog:mx-8">CONVERSATIONS ABOUT PERSPECTIVES, LIFE-CHANGING ADVENTURES, AND INSPIRATIONAL STORIES THAT WILL LIFT YOUR SPIRITS WHILE ALSO HIGHLIGHTING SIGNIFICANT COMMUNITY FIGURES.</p>
          <a href="/About" className="bg-[#121212] blog:text-sm inline-block px-6 py-4 rounded-md text-white hover:bg-primary hover:shadow-md transition-all duration-300">Learn more</a>
        </div>
      </div>

      <div ref={womenInEgyptRef} className="relative flex items-center justify-between overflow-hidden blog:flex-col-reverse blog:w-full blog:px-4">
        <div style={{ transform: `translateX(${womenInEgyptRef.current && Math.min(0, (offsetY - Math.abs(womenInEgyptRef.current?.getBoundingClientRect().top) - 350) * 0.6)}px)` }} className="flex-1 pl-20 blog:pl-0 blog:text-center">
          <div className="space-y-6 blog:space-y-2 blog:px-40 blogsm:px-2">
            <h1 className="text-5xl blog:text-3xl">Women in Egypt<span className="text-primary italic">?</span></h1>
            <p className="text-xl blog:text-base">NOT AS A MATTER OF RIGHTS, BUT AS A MATTER OF RESPECT & BEHAVIOURAL CHANGE.</p>
          </div>
        </div>
        <div style={{ transform: `translateX(${womenInEgyptRef.current && Math.max(0, -(offsetY - Math.abs(womenInEgyptRef.current?.getBoundingClientRect().top) - 350) * 0.6)}px)` }} className="flex-1 pr-20 blog:pr-0 blog:w-full w-auto h-[29rem] aspect-square overflow-hidden relative flex items-center justify-center">
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
        </div>
      </div>

      <div className="space-y-5 text-center w-fit blog:w-full relative mx-auto px-20 blog:px-6">
        <div className="">
          <h1 className="text-7xl blog:text-4xl uppercase font-semibold">Subscribe</h1>
          <p className="mt-6 blog:mt-3 blog:text-sm">Stay in the loop! Enter your email below to get updates.</p>
        </div>
        <div className="flex items-center justify-center space-x-3 pt-6 blog:pt-2">
          <input placeholder="Enter your email" className="h-12 flex-1 min-w-[20rem] blog:min-w-[auto] rounded-md py-1.5 pl-2 outline-none border-2 border-[#E5E5E5] hover:drop-shadow-md transition-all duration-300"/>
          <button className="bg-[#121212] px-4 py-1.5 rounded-md text-white h-11 hover:bg-primary hover:shadow-md transition-all duration-300">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;