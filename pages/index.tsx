
import { isBgImgLoaded } from "@/public/utils/load"
import homeStyle from "@/public/style/home.module.scss"
import { useEffect, useState } from "react"
export default function Home() {

  const [isLoad, setIsLoad] = useState(false)

  useEffect(() => {
    isBgImgLoaded("#home-container").then(isLoad => {
      setIsLoad(isLoad)
    })
  }, [])

  return (
    <div className={`${homeStyle.bg} bg-universal`} id="home-container">
      <h6 className={`${homeStyle["animation-universal"]} ${homeStyle["sub-title"]}  ${isLoad ? homeStyle["title-animation"] : ""}`}>It is what we do that defines us  </h6>
      <h1 className={`${homeStyle["animation-universal"]} ${homeStyle["main-title"]}  ${isLoad ? homeStyle["title-animation"] : ""}`}>Dowson’s Blog</h1>
      <span className={`${homeStyle["animation-universal"]} ${homeStyle.btn} ${isLoad ? homeStyle["title-animation"] : ""}`}>VIEW MORE</span>
    </div>
  )
}
