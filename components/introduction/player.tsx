import playerStyle from "@/public/style/player.module.scss";
import { useEffect, useState } from "react";

export default function Player(props: { videoSrc: string, onchangeOpen: Function }) {
    const [open, setOpen] = useState(true)

    const changeOpen = () => {
        const video: any = document.querySelector("#video")
        setOpen(false)
        props.onchangeOpen(open)
        video.src = ""
        video.pause()
    }

    useEffect(() => {
        const video: any = document.querySelector("#video")
        if (props.videoSrc) {
            video.src = props.videoSrc
            video.play()
        } else {
            video.src = ""
        }
    })

    return <div className={playerStyle["player-container"]}>
        <i className={`${playerStyle.icon} iconfont icon-close-bold`} onClick={changeOpen} />
        <video className={`${playerStyle.video} position-center `} id="video" controls />
    </div>
}