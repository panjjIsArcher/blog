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

    const fetch = async () => {
        const myStacks: StackType[] = await stacks
        return myStacks
    }

    const setUl = () => {
        return st.map(e => {
            return <li key={e.name} data-name={e.name} className={`${cardName === e.name ? stackStyle.active : ''}`} onMouseEnter={rolling} >
                <div className={stackStyle.front}>{e.name}</div>
                <div className={stackStyle.back} />
            </li>
        })
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
        })
    })

    const rolling = (e: any) => {
        const { name } = e.target.parentNode.dataset
        setCardName(name)
    }


    return <div className={stackStyle.stack} ref={section}>
        <ul className={`${stackStyle.list} ${isLoaded ? stackStyle['is-loaded'] : ''} `}>
            {setUl()}
        </ul>
    </div >
}