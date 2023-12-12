import proStyle from "@/public/style/projects.module.scss";
import Project from "./project";
import { intersectionObserver } from "@/public/utils/deviceAdapter";
import { useEffect, useRef, useState } from "react";
import { Project as ProjectType } from "@/type/brief";
import { projects as projectData } from "@/mock/database"

function PorjectList() {
    const [list, setList] = useState<ProjectType[]>([])
    const fetch = async () => {
        const data = await projectData
        return data
    }

    useEffect(() => {
        fetch().then((data) => {
            setList(data)
        })
    })

    return <ul className={proStyle.ul}>
        {
            list.map((e, index) => {
                const { id, name, url, img, subTitle } = e
                return <li key={id} className="project-item">
                    <style jsx>{`.project-item{--index:${index}}`}</style>
                    <Project id={id} name={name} subTitle={subTitle} url={url} img={img} />
                </li>
            })
        }
    </ul>
}

export default function Projects() {
    const box = useRef(null)
    const [loaded, setLoaded] = useState(false)
    const mousemove = (event: any) => {
        console.log(`x:${event.pageX}, y:${event.pageY}`)
    }
    useEffect(() => {
        intersectionObserver(box.current, (entries) => {
            const isIntersecting: boolean = entries.every((entry: { isIntersecting: boolean }) => entry.isIntersecting)
            if (isIntersecting && !loaded) {
                setLoaded(isIntersecting)
            }
        }, { threshold: 0.8 })

        document.addEventListener("mousemove", mousemove)

        return () => {
            document.removeEventListener("mousemove", mousemove)
        }
    })


    return (<div ref={box} className={proStyle.container} >
        {loaded ? <div className={proStyle.middle}>
            <div className={`${proStyle["left-box"]}  ${proStyle.box}`} />
            <div className={`${proStyle["right-box"]}  ${proStyle.box}`} />
            <div className={`${proStyle["projects"]}`}>
                <PorjectList />
            </div>
        </div> : ""}
    </div>)
}