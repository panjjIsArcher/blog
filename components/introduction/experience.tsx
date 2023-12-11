import { labels as labelsData } from "@/mock/database";
import experienceStyle from "@/public/style/experience.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import avatar from "@/public/image/avatar.jpg"

function Card() {
    const [labels, setLabels] = useState<string[]>([])

    const fetch = () => {
        const data = labelsData
        return data
    }

    const labelsList = () => {
        return labels.map((label, index) => {
            return <li key={label} className={`{experienceStyle.label} label-item`}>
                {/* animation-delay: ${index * 0.3}s; */}
                <style jsx>{
                    `.label-item{
                       --delay: ${index * 0.3}s;
                    }`
                }</style>
                {label}

            </li>
        })
    }

    useEffect(() => {
        const labels = fetch()
        setLabels(labels)

    })

    return <div className={`${experienceStyle["card-container"]} position-center`}>

        <div className={`${experienceStyle.back} ${experienceStyle.card} `} />
        <div className={`${experienceStyle.front} ${experienceStyle.card}`}>
            <Image src={avatar} layout="responsive" className={experienceStyle.image} />
            <ul>
                {labelsList()}
            </ul>
        </div>
    </div>
}

function Ul() {
    return <ul className={experienceStyle.ul}>这是列表</ul>
}

export default function Experience() {
    const [cardVisible, setCardVisible] = useState(true)

    const changeNav = () => {
        const visible = !cardVisible
        setCardVisible(visible)
    }

    return <div className={experienceStyle.container}>
        <div className={experienceStyle.left}>
            <nav className={`${experienceStyle.nav} iconfont   ${cardVisible ? "icon-zhankai" : "icon-close-bold"}`} onClick={changeNav} />
            <h4 className={experienceStyle.title}>Bruce Dowson</h4>
            <h5 className={experienceStyle.subtitle}>go by 「Jiajie Pan」</h5>
            {cardVisible ? <Card /> : <Ul />}
        </div>

        <div className={experienceStyle.right}>
            这里是文字
        </div>
    </div >
}