import introStyle from "@/public/style/introduction.module.scss";
import { useEffect, useState } from "react";
export default function Introduction() {
    const [startLoad, setStartLoad] = useState(false)
    useEffect(() => {
        setStartLoad(true)
    }, [])
    return <div className={`${introStyle.container} `}>
        <div className={`${startLoad ? introStyle.animation : ""} ${introStyle.content}`}></div>
    </div>
}