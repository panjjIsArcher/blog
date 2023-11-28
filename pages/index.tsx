
import homeStyle from "@/public/style/home.module.scss"
import Image from "next/image"
import bgImg from "@/public/image/introduction.png"

export default function Home() {

  return (
    <div className={`${homeStyle.bg} bg-universal`} >
      <Image src={bgImg} alt="" className={homeStyle.img} layout="fill" />
      <h6 className={homeStyle["sub-title"]}>It is what we do that defines us  </h6>
      <h1 className={homeStyle["main-title"]}>Dowson’s Blog</h1>
      <span className={homeStyle.btn}>VIEW MORE</span>
    </div>
  )
}
