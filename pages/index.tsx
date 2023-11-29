
import { isBgImgLoaded } from "@/public/utils/load"
import homeStyle from "@/public/style/home.module.scss"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
export default function Home() {

  const [isLoad, setIsLoad] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const router = useRouter()
  const startLeave = () => {
    setLeaving(true)
  }

  const jump = () => {
    router.push("/introduction")
  }

  useEffect(() => {
    isBgImgLoaded("#home-container").then(isLoad => {
      setIsLoad(isLoad)
    })
  }, [])

  return (
    <div className={`${homeStyle.bg} ${leaving ? homeStyle.leave : ""}  bg-universal`} id="home-container" onAnimationEnd={jump}>
      <h6 className={`${homeStyle["animation-universal"]} ${homeStyle["sub-title"]}  ${isLoad ? homeStyle["title-animation"] : ""}`}>It is what we do that defines us  </h6>
      <h1 className={`${homeStyle["animation-universal"]} ${homeStyle["main-title"]}  ${isLoad ? homeStyle["title-animation"] : ""}`}>Dowson’s Blog</h1>
      <span className={`${homeStyle["animation-universal"]} ${homeStyle.btn} ${isLoad ? homeStyle["title-animation"] : ""}`}
        onClick={startLeave}
      >
        VIEW MORE
      </span>
    </div>
  )
}
