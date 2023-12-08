

import homeStyle from "@/public/style/home.module.scss"
import { useState } from "react"

export default function Home() {
  const [start, setStart] = useState(false)
  const [end, setEnd] = useState(false)

  const animationStart = () => {
    setStart(true)
  }

  const animationEnd = () => {
    setEnd(true)
  }

  const jump = () => {
    const src = "" // 媒体路径
    const audio = new Audio()
    audio.play()
  }

  return (
    <div className={homeStyle.container}>
      <div className={homeStyle.circle}
        onAnimationEnd={animationEnd}
        onAnimationStart={animationStart}>
        <span className={`${homeStyle.btn} ${end ? 'animation-end' : ''}`} onClick={jump}>
          start
        </span>
      </div>

      <h6 className={`${homeStyle.title} ${homeStyle["sub-title"]} ${start ? 'animation-start' : ''}`}>
        Weakness and ignorance are not<br></br> barriers to survival, <br></br>  but arrogance is.</h6>
      <h1 className={`${homeStyle.title} ${homeStyle["main-title"]}`}>Dowson’s Blog</h1>

    </div >
  )
}
