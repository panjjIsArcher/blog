

import homeStyle from "@/public/style/home.module.scss"
import { useEffect, useState } from "react"
import Router from "next/router"
const ROUTES = require("../public/router/router")

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
    Router.push({ pathname: ROUTES.INTRODUCTION })
  }

  useEffect(() => {
    // 预加载下一个页面的资源 节省用户等待时间
    Router.prefetch(ROUTES.INTRODUCTION)

  })

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
        Weakness and ignorance are not<br></br> barriers to survival, <br></br>  but 「arrogance」 is.</h6>
      <h1 className={`${homeStyle.title} ${homeStyle["main-title"]}`}>Dowson’s Blog</h1>

    </div >
  )
}
