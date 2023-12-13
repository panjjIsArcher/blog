import playerStyle from "@/public/style/player.module.scss";
import { useEffect, useState } from "react";

export default function Player(props: { videoSrc: string }) {
    // const [videoSrc, setVideoSrc] = useState("")

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
        <video src={props.videoSrc} className={`${playerStyle.video} position-center `} id="video" autoPlay={true} />
    </div>
}