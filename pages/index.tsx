

import homeStyle from "@/public/style/home.module.scss"

export default function Home() {

  return (
    <div className={homeStyle.container}>
      <div className={homeStyle.circle} />

      <h6 className={`${homeStyle.title} ${homeStyle["sub-title"]}`}>
        Weakness and ignorance are not<br></br> barriers to survival, <br></br>  but arrogance is.</h6>
      <h1 className={`${homeStyle.title} ${homeStyle["main-title"]}`}>Dowson’s Blog</h1>
      <span
      >
        VIEW MORE
      </span>
    </div >
  )
}
