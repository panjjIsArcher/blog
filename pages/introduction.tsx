import Footer from "@/components/layout/footer"
import Brief from "@/components/introduction/brief";
import Stack from "@/components/introduction/stack";
import Projects from "@/components/introduction/projects";
import introStyle from "@/public/style/introduction.module.scss";
import Experience from "@/components/introduction/experience";
import SlideDown from "@/components/introduction/slideDown"
import { useEffect, useState } from "react";
// eslint-disable-next-line
import src from "@/public/audio/impossibleMission.mp3";

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
            <section className={introStyle.section}>
                <Experience />
            </section>
            <section className={introStyle.section}>
                <Stack />
            </section>
            <section className={introStyle.section}>
                <Projects />
            </section>
            <section >
                <Footer />
            </section>
        </div>
    </div>
}