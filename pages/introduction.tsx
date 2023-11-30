import introStyle from "@/public/style/introduction.module.scss";
import { useEffect, useState } from "react";
export default function Introduction() {
    const [startLoad, setStartLoad] = useState(false)
    const [startScroll, setStartScroll] = useState(false)

    
    useEffect( () => {
        const fetch = async () =>{
            await new Promise(resolve => setTimeout(resolve, 2.5 * 1000))
            setStartScroll(true)
        }
        setStartLoad(true)
        fetch()
        
    }, [])
    return <div className={`${introStyle.container}  ${startScroll?introStyle["enable-scroll"]:""}`}>
        <div className={`${startLoad ? introStyle.animation : ""} ${introStyle.content}`} >
            <section className={introStyle.section}>板块1</section>
            <section className={introStyle.section}>板块2</section>
            <section className={introStyle.section}>板块3</section>
        </div>
    </div>
}