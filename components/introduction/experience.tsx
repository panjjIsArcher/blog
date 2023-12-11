import { labels as labelsData } from "@/mock/database";
import experienceStyle from "@/public/style/experience.module.scss";
import { useEffect, useState } from "react";

function Card() {
    const [labels, setLabels] = useState<string[]>([])

    const fetch = () => {
        const data = labelsData
        return data
    }

    const labelsList = () => {
        return labels.map(label => {
            return <li key={label}>{label}</li>
        })
    }

    useEffect(() => {
        const labels = fetch()
        setLabels(labels)

    })

    return <div className={`${experienceStyle["card-container"]} position-center`}>
        <div className={`${experienceStyle.back} ${experienceStyle.card} `} />
        <div className={`${experienceStyle.front} ${experienceStyle.card}`}>
            <img src="" alt="" />
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
            {cardVisible ? <Card /> : <Ul />}
        </div>

        <div className={experienceStyle.right}>
            这里是文字
        </div>
    </div >
}