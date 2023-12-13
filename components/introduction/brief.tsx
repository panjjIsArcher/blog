import briefStyle from "@/public/style/brief.module.scss";
import { useState } from "react";
import { data } from "@/mock/database";
import { MODULES } from "@/public/utils/const";
import { Describution } from "@/type/brief";

const list = [
    {
        name: "experience",
        id: MODULES.EXPERIENCE
    },
    {
        name: "skill stack",
        id: MODULES.STACK
    },
    {
        name: "projects",
        id: MODULES.PROJECTS
    },
    {
        name: "connect me",
        id: MODULES.SOCIAL
    }]


export default function Brief() {
    const [describution, setDescribution] = useState("")

    const changeIndex = async (e: any) => {
        const dataset = e.target.dataset

        const fetch = async (id: number): Promise<Describution> => {
            const response: Describution | undefined = await data.find((e) => e.id === id)
            if (!response) {
                return { describution: "", id }
            }
            return response
        }

        const id = Number(dataset.index) + 1
        const response = await fetch(id)
        const { describution } = response
        setDescribution(describution)

    }

    const scroll = (module: string) => {
        const dom: Element | null = document.querySelector(`#${module}`)
        if (!dom) {
            return
        }
        dom.scrollIntoView({
            behavior: 'smooth', // 平滑孤独
            block: "end" // 滑到bottom
        })
    }

    const ul = list.map((li, index, arr) => {
        const length = arr.length;
        const gap = 25 - 5 * index;
        return (<li key={li.name} onMouseEnter={changeIndex} value={index} data-index={index} onClick={() => { scroll(li.id) }}>
            <a className={briefStyle.title}> {li.name}</a>
            <style jsx>{`a{left:${gap}%}}`}</style>
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
        <div className={`${briefStyle.right} `} >
            <article className={briefStyle.describution}>{describution}</article>
        </div>
    </div>
}