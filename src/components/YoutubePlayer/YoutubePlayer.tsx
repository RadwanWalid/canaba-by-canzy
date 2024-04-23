import { useState } from "react"

type Props = {
  link: string,
  invertLoading: boolean,
}

const YoutubePlayer = (props: Props) => {

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="relative h-min overflow-hidden flex items-center justify-center rounded-lg w-96 blog:w-full aspect-[560/315] drop-shadow-lg">
      {
        loading ? <span className={`loader ${ props.invertLoading ? 'after:border-[#FFF_transparent]': 'after:border-[#161FFF_transparent]' }`} />: null
      }
      <iframe className={`h-full w-full ${loading && 'hidden'}`} src={props.link} onLoad={() => setLoading(false)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default YoutubePlayer