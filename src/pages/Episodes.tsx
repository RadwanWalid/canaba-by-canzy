import YoutubePlayer from "../components/YoutubePlayer/YoutubePlayer";

const Episodes = () => {

  const uploads: { title: string, link: string }[] = [
    { title: 'Women in Egypt ? Aliaa Moatasem', link: 'https://www.youtube.com/embed/hlv6IHGXckY?si=HNL3EpYT8BmWv9kQ' },
    { title: 'Women in Egypt ? Aya Saleh', link: 'https://www.youtube.com/embed/AnhvAhfrnDY?si=kYNrqzuA5quSY9z8'},
    { title: 'Women in Egypt ? Menna Khalil', link: 'https://www.youtube.com/embed/-uLTrI4tqmE?si=WGzH1Jq8ys89Eghg'},
    { title: 'Women in Egypt ? Fatma Sharmy', link: 'https://www.youtube.com/embed/RsMBeBiBph0?si=aLoqSGmZG2pr5YzX'}, 
    { title: 'Women in Egypt ? Batoul Ahmed', link: 'https://www.youtube.com/embed/U0AbAfKEGXM?si=ug2ILeU9ojdh_RvA'}, 
    { title: 'Women in Egypt ? Fatma Ahmed', link: 'https://www.youtube.com/embed/bgs0acrZXBg?si=NNO3c32meId4t8oy'},
  ];

  return (
    <div className="relative space-y-14 px-16 blog:px-10">
      <div className="relative flex blog:flex-col blog:space-x-0 items-center justify-between space-x-16 h-full pt-12">
        <div className="flex-1 space-y-4 blog:text-center">
          <h1 className="text-6xl blog:text-2xl italic font-medium">{uploads[0].title}</h1>
          <p className="text-[#B8B8B8]">Watch our latest episode.</p>
          <a href="https://youtu.be/hlv6IHGXckY?si=K9toOE9K0Y940FZ5" target="_blank" className="blog:hidden mt-4 rounded-md py-2.5 inline-block px-6 border-2 text-primary border-primary hover:text-[#F5F5F5] hover:bg-primary transition-all duration-200">Watch Now</a>
        </div>
        <div className="relative drop-shadow-lg blog:mt-10">
          <div className="bg-primary w-full rounded-xl absolute -right-6 -top-4 bottom-4" />
          <YoutubePlayer link={uploads[0].link} invertLoading />
        </div>
      </div>

      <hr className="border-2 mx-20 blog:mx-0" />

      <div className="space-y-12">
        <h1 className="text-5xl blog:text-3xl">Recent Episodes</h1>
        <div className="grid normal:grid-cols-2 grid-cols-3 nav:grid-cols-1 mx-auto gap-x-10 gap-y-12 w-fit">
          {
            uploads.map((upload, index) => (
              <YoutubePlayer key={index} title={upload.title} link={upload.link} invertLoading={false} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Episodes