import universalStyle from "../public/style/universal.module.scss"; // universal style
import deviceStyle from "../public/style/device.module.scss";
export default function Home() {
  return (
    <div className={deviceStyle.div}>这是引导页
      <div className={universalStyle["position-center"]} />
    </div>
  )
}
