import proStyle from "@/public/style/projects.module.scss";
import { intersectionObserver } from "@/public/utils/deviceAdapter";
import { useEffect, useRef, useState } from "react";

export default function Projects() {
    const box = useRef(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        intersectionObserver(box.current, (entries) => {
            const isIntersecting: boolean = entries.every((entry: { isIntersecting: boolean }) => entry.isIntersecting)
            if (isIntersecting && !loaded) {
                setLoaded(isIntersecting)
            }
        }, { threshold: 0.8 })
    })


    return (<div ref={box} className={proStyle.container}>
        {loaded ? <div className={proStyle.middle}>
            <div className={`${proStyle["left-box"]}  ${proStyle.box}`} />
            <div className={`${proStyle["right-box"]}  ${proStyle.box}`} />
        </div> : ""}
    </div>)
}