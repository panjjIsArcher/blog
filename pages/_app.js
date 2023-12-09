import "../public/style/device.scss";
import "../public/style/universal.scss";
import "../public/font/iconfont.css";
import { reCalc } from "@/public/utils/deviceAdapter";
import { useEffect } from "react";
import dynamic from "next/dynamic";


// import autofit from "autofit.js";

// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // autofit.init({
    //   resize: true,
    //   dh: 1080,
    //   dw: 1920,
    //   transition: 500
    // })
    // 1rem = 100px
    reCalc(1920, 1920);
  }, [])
  return <Component {...pageProps} />;
}
