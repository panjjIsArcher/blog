import "../public/style/device.scss";
import "../public/style/universal.scss";
import { reCalc } from "@/public/utils/deviceAdapter";
import { useEffect } from "react";
// 新创建的 `pages/_app.js` 文件中必须有此默认的导出（export）函数
export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // 1rem = 100px
    reCalc(1920, 1920);
  }, [])
  return <Component {...pageProps} />;
}
