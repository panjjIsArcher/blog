import universal from "../public/style/universal.module.scss"; // universal style

export default function Home() {
  return (
    <div >这是引导页
      <div className={universal["position-center"]} />
    </div>
  )
}
