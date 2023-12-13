import Footer from "@/components/layout/footer"
import Brief from "@/components/introduction/brief";
import Stack from "@/components/introduction/stack";
import Projects from "@/components/introduction/projects";
import Player from "@/components/introduction/player"
import introStyle from "@/public/style/introduction.module.scss";
import Experience from "@/components/introduction/experience";
import SlideDown from "@/components/introduction/slideDown"
import { useEffect, useState } from "react";
// eslint-disable-next-line
import src from "@/public/audio/del.mp3";

export default function Introduction() {
    const [startLoad, setStartLoad] = useState(false)
    const [startScroll, setStartScroll] = useState(false)
    const [showVideoSection, setShowVideoSection] = useState(false)
    const [videoSrc, setVideoSrc] = useState("")
    let audioPLayer: HTMLAudioElement | null;

    const play = () => {
        const audio = new Audio(src)
        audio.play()
        audioPLayer = audio
    }

    const playVideo = (url: string) => {
        const isShow = !!url
        setShowVideoSection(isShow)
        setVideoSrc(url)

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
            <section className={introStyle.section}>
                <Experience />
            </section>
            <section className={introStyle.section}>
                <Stack />
            </section>
            <section className={`${introStyle.section} ${introStyle["video-section"]} ${showVideoSection ? introStyle["video-section-show"] : introStyle["video-section-hide"]} `}>
                <Player videoSrc={videoSrc} />
            </section>
            <section className={introStyle.section}>
                <Projects onplay={playVideo} />
            </section>
            <section >
                <Footer />
            </section>
        </div>
    </div>
}