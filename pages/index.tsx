
import homeStyle from "@/public/style/home.module.scss"
export default function Home() {
  return (
    <div className={`${homeStyle.bg} bg-universal`} >
      <h6 className={homeStyle["sub-title"]}>It is what we do that defines us  </h6>
      <h1 className={homeStyle["main-title"]}>Dowson’s Blog</h1>
      <span className={homeStyle.btn}>VIEW MORE</span>
    </div>
  )
}
