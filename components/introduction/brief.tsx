import briefStyle from "@/public/style/brief.module.scss";
import { useState } from "react";

const list = [
    {
        name: "experience"
    },
    {
        name: "skill stack"
    },
    {
        name: "projects"
    },
    {
        name: "connect me"
    }]


export default function Brief() {

    const [index, setIndex] = useState(0)

    const changeIndex = (e: any) => {
        const dataset = e.target.dataset
        setIndex(dataset.index)

    }

    const ul = list.map((li, index, arr) => {
        const length = arr.length;
        const gap = 25 - 5 * index;
        return (<li key={li.name} id={li.name} onMouseEnter={changeIndex} value={index} data-index={index}>
            <h5 className={briefStyle.title}> {li.name}</h5>
            <style jsx>{`h5{left:${gap}%}}`}</style>
            <style jsx>{`li{height:${100 / length}%;`} </style>
            <span className={briefStyle.block} />
        </li>)
    })

    return <div className={briefStyle.brief}>
        <div className={briefStyle.left} >
            <ul className={briefStyle.menu} >
                {ul}
            </ul>
        </div>
        <div className={`${briefStyle.right} `} />
    </div>
}