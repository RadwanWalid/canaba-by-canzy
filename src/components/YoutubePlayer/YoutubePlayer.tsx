import { useState } from "react"

type Props = {
  title?: string,
  link: string,
  invertLoading: boolean,
}

const YoutubePlayer = (props: Props) => {

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="flex flex-col justify-between space-y-2">
      <h1 className="text-lg blog:text-2xl italic font-medium">{props.title}</h1>
      <div className="relative h-min overflow-hidden flex items-center justify-center rounded-lg w-96 episodes:w-80 blog:w-full aspect-[560/315] drop-shadow-lg">
        {
          loading ? <span className={`loader ${ props.invertLoading ? 'after:border-[#FFF_transparent]': 'after:border-[#161FFF_transparent]' }`} />: null
        }
        <iframe className={`h-full w-full ${loading && 'hidden'}`} src={props.link} onLoad={() => setLoading(false)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default YoutubePlayer