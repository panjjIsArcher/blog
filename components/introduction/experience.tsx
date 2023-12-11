import experienceStyle from "@/public/style/experience.module.scss";
import { useEffect, useState } from "react";

function Card() {
    return <div className={experienceStyle.card}>这是卡片</div>
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
            <nav className={`${experienceStyle.nav} iconfont  ${cardVisible ? "icon-zhankai" : "icon-close-bold"}`} onClick={changeNav} />
            {cardVisible ? <Card /> : <Ul />}
        </div>

        <div className={experienceStyle.right}>
            这里是文字
        </div>
    </div >
}