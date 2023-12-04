
import { isBgImgLoaded } from "@/public/utils/load"
import homeStyle from "@/public/style/home.module.scss"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
export default function Home() {

  const [isLoad, setIsLoad] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const container = useRef(null)
  const router = useRouter()

  const startLeave = () => {
    const el: any = container.current
    if (el && !el.hasAttribute("animationend")) {
      el.addEventListener("animationend", hasLeft, false)
    }
    setLeaving(true)
  }
  const hasLeft = async () => {
    await new Promise(resolve => setTimeout(resolve, 1.25 * 1000))
    router.push("/introduction")
  }

  useEffect(() => {
    const el: any = container.current
    if (el) {
      el.removeEventListener("animationend", hasLeft)
    }

    isBgImgLoaded("#home-container").then(isLoad => {
      setIsLoad(isLoad)
    })
  })


  return (
    <div className={`${homeStyle.bg} ${leaving ? homeStyle.leave : ""}  bg-universal`} id="home-container" ref={container} >
      <div className={homeStyle.glass} />
      <h6 className={`${homeStyle["animation-universal"]} 
      ${homeStyle["sub-title"]}  
      ${isLoad ? homeStyle["sub-title-animation"] : ""}`}>
        Weakness and ignorance are not barriers to survival, but arrogance is.</h6>
      <h1 className={`${homeStyle["animation-universal"]} ${homeStyle["main-title"]}  ${isLoad ? homeStyle["title-animation"] : ""}`}>Dowson’s Blog</h1>
      <span className={`${homeStyle["animation-universal"]} ${homeStyle.btn} ${isLoad ? homeStyle["btn-title-animation"] : ""}`}
        onClick={startLeave}
      >
        VIEW MORE
      </span>
    </div>
  )
}
