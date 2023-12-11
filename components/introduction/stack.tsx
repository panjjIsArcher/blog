import { stacks } from "@/mock/database";
import stackStyle from "@/public/style/stack.module.scss";
import { intersectionObserver } from "@/public/utils/deviceAdapter";
import { Stack as StackType } from "@/type/brief";
import { useEffect, useRef, useState } from "react";

export default function Stack() {
    const section = useRef(null)
    const [st, setSt] = useState<StackType[]>([])
    const [cardName, setCardName] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    const [info, setInfo] = useState<StackType>({ name: "", skills: [] })

    const fetch = async () => {
        const myStacks: StackType[] = await stacks
        return myStacks
    }

    const setUl = () => {
        const min = 1
        const max = st.length
        const gap = 120 / (max - min)
        return st.map((e, index) => {

            const deg = -60 + index * gap
            return <li key={e.name} data-name={e.name} className={`card-list ${cardName === e.name ? stackStyle.active : ''}`} onMouseEnter={rolling} onMouseOver={select} >
                <div className={stackStyle.front}>{e.name}</div>
                <div className={stackStyle.back} />

                <style jsx>
                    {`.card-list{
                       animation-name: card-spread-${index + 1};
                    }
                    .card-list:hover {
                         bottom:0.5rem;
                    }
                    @keyframes card-spread-${index + 1} {
                        0%{
                            transform:rotateZ(0deg);
                        }
                        100%{
                            transform:rotateZ(${deg}deg);
                        }
                    }`}
                </style>
            </li>
        })
    }

    const select = (e: any) => {
        const { name } = e.target.parentNode.dataset
        const info: StackType | undefined = st.find(stack => stack.name === name)
        setInfo(info || { name: "", skills: [] })
    }

    useEffect(() => {
        intersectionObserver(section.current, async (entries) => {
            const isIntersecting: boolean = entries.every((entry: { isIntersecting: boolean }) => entry.isIntersecting)
            if (isIntersecting && !isLoaded) {
                // 进入页面区域，开始请求
                const stacks = await fetch()
                setSt(stacks)
                setIsLoaded(isIntersecting)

            }
        }, { threshold: 0.7 }) // 页面完全进入时候
    })

    const rolling = (e: any) => {
        const { name } = e.target.parentNode.dataset
        setCardName(name)
    }


    return <div className={stackStyle.stack} ref={section}>
        <div className={stackStyle.container}>
            <div className={stackStyle.title}>
                <h6>{info.name}</h6>
                <p className={stackStyle["sub-title"]}>Here is my「Skill Stack」 </p>
            </div>
            <ul className={stackStyle.skills}>
                {
                    info.skills.map(skill => {
                        const icons = ["icon-0024spades", "icon-uniEBFC", "icon-lingxing"]
                        const max = 2
                        const min = 0
                        const index = Math.floor(Math.random() * (max - min) + min);
                        const icon = icons[index]
                        return <li key={skill} className={`iconfont ${icon} ${stackStyle.icon}`}>
                            <span>{skill}</span>
                        </li>
                    })
                }
            </ul>
        </div>
        <ul className={`${stackStyle.list} ${isLoaded ? stackStyle['is-loaded'] : ''} `}>
            {isLoaded ? setUl() : ''}
        </ul>
    </div >
}