import { labels as labelsData, jobs as jobsData } from "@/mock/database";
import experienceStyle from "@/public/style/experience.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import avatar from "@/public/image/avatar.jpg"
import { Job } from "@/type/brief";

function Card() {
    const [labels, setLabels] = useState<string[]>([])

    const fetch = () => {
        const data = labelsData
        return data
    }

    const labelsList = () => {
        return labels.map((label, index) => {
            return <li key={label} className={`{experienceStyle.label} label-item`}>
                <style jsx>{`.label-item{--delay: ${index * 0.3}s;}`}</style>
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

function Ul(props: { cardVisible: boolean }) {
    const cardVisible = props.cardVisible
    return <ul className={`${experienceStyle.ul} ${cardVisible ? experienceStyle["move-in"] : experienceStyle["move-out"]}`}>
        {!cardVisible ? '' : <Jobs />}
    </ul>
}

function Jobs() {
    const [jobs, setJobs] = useState<Job[]>([])
    useEffect(() => {
        setJobs(jobsData)
    })
    return jobs.map(job => {
        return <li className={experienceStyle.job} key={job.name}>{job.name}</li>
    })
}

export default function Experience() {
    const [cardVisible, setCardVisible] = useState(true)

    const changeNav = () => {
        const visible = !cardVisible
        setCardVisible(visible)
    }

    return <div className={experienceStyle.container}>
        <div className={experienceStyle.left}>
            <nav className={`${experienceStyle.nav} iconfont   ${!cardVisible ? "icon-zhankai" : "icon-close-bold"}`} onClick={changeNav} />
            <h4 className={experienceStyle.title}>Bruce Dowson</h4>
            <h5 className={experienceStyle.subtitle}>go by 「Jiajie Pan」</h5>
            <Card />
            <Ul cardVisible={cardVisible} />
        </div>

        <div className={experienceStyle.right}>
            这里是文字
        </div>
    </div >
}