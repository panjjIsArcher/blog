import "../public/style/device.scss";
import "../public/style/universal.scss";
import "../public/font/iconfont.css";
import { reCalc } from "@/public/utils/deviceAdapter";
import { useEffect } from "react";


// import autofit from "autofit.js";

// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    reCalc(1920, 1920);
  }, [])
  return <Component {...pageProps} />;
}
