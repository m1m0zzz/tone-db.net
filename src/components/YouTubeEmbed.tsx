interface Props {
  id: string
  width?: number | string
  height?: number | string
}

export default function YouTubeEmbed({ id, width = "100%", height = "auto" }: Props) {
  return (
    <iframe
      style={{
        width: width,
        height: height,
        aspectRatio: "16 / 9",
      }}
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  )
}
