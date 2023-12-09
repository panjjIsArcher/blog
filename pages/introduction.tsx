import Footer from "@/components/layout/footer"
import Brief from "@/components/introduction/brief";
import introStyle from "@/public/style/introduction.module.scss";
import SlideDown from "@/components/introduction/slideDown"
import { useEffect, useState } from "react";
// 资源
import src from "../public/audio/impossibleMission.mp3";

export default function Introduction() {
    const [startLoad, setStartLoad] = useState(false)
    const [startScroll, setStartScroll] = useState(false)
    let audioPLayer: HTMLAudioElement | null;

    const play = () => {
        const audio = new Audio(src)
        audio.play()
        audioPLayer = audio

    }
    useEffect(() => {
        play()
        setStartLoad(true)
        setStartScroll(true)

        return () => {
            if (audioPLayer) {
                audioPLayer.pause()
                audioPLayer = null
            }
        }
    }, [])

    return <div className={`${introStyle.container}  ${startScroll ? introStyle["enable-scroll"] : ""}`}>
        <div className={`${startLoad ? introStyle.animation : ""} ${introStyle.content}`} >
            <section className={introStyle.section}>
                <SlideDown />
            </section>
            <section className={introStyle.section}>
                <Brief />
            </section>
            <section className={introStyle.section} >
                <Footer />
            </section>
        </div>
    </div>
}