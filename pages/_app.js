import "../public/style/device.scss";
import "../public/style/universal.scss";
import "../public/font/iconfont.css";
import { reCalc } from "@/public/utils/deviceAdapter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import Loading from "@/components/loading"

// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const routeChangeStart = (url, opts) => {
    console.log(url, opts)
    setLoading(true)
  }
  const routeChangeComplete = () => {
    setLoading(false)
  }

  useEffect(() => {
    router.events.on("routeChangeStart", routeChangeStart)
    router.events.on("routeChangeComplete", routeChangeComplete)
    reCalc(1920, 1920);

    return () => {
      router.events.off("routeChangeStart", routeChangeStart)
      router.events.off("routeChangeComplete", routeChangeComplete)
    }
  }, [])

  const style = {
    position: "fixed", left: 0, top: 0, backgroundColor: "#000", height: "100%", width: "100%"
  }

  return <div >
    <Component {...pageProps} />
    {loading ? <div style={style}>
      <Loading />
    </div> : ""}

  </div>

}
