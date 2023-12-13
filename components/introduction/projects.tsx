import proStyle from "@/public/style/projects.module.scss";
import Project from "./project";
import { intersectionObserver } from "@/public/utils/deviceAdapter";
import { useEffect, useRef, useState } from "react";
import { Project as ProjectType } from "@/type/brief";
import { projects as projectData } from "@/mock/database"

function PorjectList(props: { onChange: Function }) {
    const [list, setList] = useState<ProjectType[]>([])
    const [stop, setStop] = useState(false)
    const fetch = async () => {
        const data = await projectData
        return data
    }

    const changeProject = (e: ProjectType) => {
        props.onChange(e)
    }

    useEffect(() => {
        if (!list.length) {
            fetch().then((data) => {
                setList(data)
            })
        }

    })

    return <ul className={proStyle.ul}>
        {
            list.map(e => {
                const { id, name, url, img, subTitle } = e
                return <li key={id} className={`project-item ${stop ? [proStyle["animation-stop"]] : ""}`}>
                    <Project id={id} name={name} subTitle={subTitle} url={url} img={img} onChange={changeProject} />
                </li>
            })
        }
    </ul>
}

export default function Projects() {
    const box = useRef(null)
    const [loaded, setLoaded] = useState(false)
    const [info, setInfo] = useState<ProjectType>({ id: 0, name: "", img: "", url: "", subTitle: "" })
    const change = async (project: ProjectType) => {
        setInfo({ name: "", id: 0, subTitle: "", img: "", url: "" })
        await new Promise(resolve => setTimeout(resolve, 700))
        setInfo(project)
    }

    useEffect(() => {
        intersectionObserver(box.current, (entries) => {
            const isIntersecting: boolean = entries.every((entry: { isIntersecting: boolean }) => entry.isIntersecting)
            if (isIntersecting && !loaded) {
                setLoaded(isIntersecting)
            }
        }, { threshold: 0.8 })
    })

    const backgroundImage = info.img ? info.img.default.src : ""
    return (<div ref={box} className={`${proStyle.container}`}>

        {loaded ? <div className={proStyle.middle}>

            <div className={`${proStyle["left-box"]}  ${proStyle.box} box`} >
                <style jsx>
                    {`.box{ background-image:url("${backgroundImage}");}`}
                </style>
                <div className={`${proStyle.cover} ${info.id ? proStyle["cover-hide"] : proStyle["cover-show"]}`} />
                {info.id ? <div className={proStyle.desc}>
                    <h3>{info.name}</h3>
                    <p>{info.subTitle}</p>
                    {!info.url ? <span className={proStyle.btn}> play </span> : ""}
                </div> : ""}
            </div>

            <div className={`${proStyle["right-box"]}  ${proStyle.box} box`} >
                <style jsx>
                    {`.box{ background-image:url("${backgroundImage}");}`}
                </style>
                <div className={`${proStyle.cover} ${info.id ? proStyle["cover-hide"] : proStyle["cover-show"]}`} />
            </div>

            <div className={`${proStyle["projects"]}`}>
                <PorjectList onChange={change} />
            </div>
        </div> : ""}
    </div>)
}