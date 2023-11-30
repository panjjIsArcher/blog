import introStyle from "@/public/style/introduction.module.scss";
import { useEffect, useRef, useState } from "react";
import { intersectionObserver } from "@/public/utils/deviceAdapter"
export default function Introduction() {
    const [startLoad, setStartLoad] = useState(false)
    const [startScroll, setStartScroll] = useState(false)
    const section3 = useRef(null)

    useEffect(() => {
        const fetch = async () => {
            await new Promise(resolve => setTimeout(resolve, 2.5 * 1000))
            setStartScroll(true)
        }
        setStartLoad(true)
        fetch()
        intersectionObserver(section3.current, (entries) => {
           
        })
    }, [])
    return <div className={`${introStyle.container}  ${startScroll ? introStyle["enable-scroll"] : ""}`}>
        <div className={`${startLoad ? introStyle.animation : ""} ${introStyle.content}`} >
            <section className={introStyle.section}>板块1</section>
            <section className={introStyle.section}>板块2</section>
            <section className={introStyle.section} ref={section3}>板块3</section>
        </div>
    </div>
}