import sdStyle from "@/public/style/slideDown.module.scss";
import { particle } from "@/public/utils/particle"
import { useEffect } from "react";
export default function SlideDown() {
    useEffect(() => {
        particle("#container", 60)
    })
    return <div className={`${sdStyle.container} bg-universal`} >
        <canvas id="container" className={sdStyle.canvas}></canvas>
        <div className={`${sdStyle.slide} ${sdStyle["slide-left-1"]}`} />
        <div className={`${sdStyle.slide} ${sdStyle["slide-left-2"]}`} />
        <div className={`${sdStyle.slide}  ${sdStyle["slide-right-1"]}`} />
        <div className={`${sdStyle.slide}  ${sdStyle["slide-right-2"]}`} />

        <p className={sdStyle.text}>slide down</p>
    </div>
}