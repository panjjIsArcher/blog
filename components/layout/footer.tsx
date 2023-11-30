import { useEffect, useRef, useState } from "react"
import { intersectionObserver } from "@/public/utils/deviceAdapter"
import footerStyle from "@/public/style/footer.module.scss"
export default function Footer() {
    const [animation, setAnimation] = useState(false)
    const section = useRef(null)

    // 监听animation
    useEffect(() => {
        // 监听页面
        intersectionObserver(section.current,
            (entries) => {
                const isIntersecting: boolean = entries.every((entry: { isIntersecting: boolean }) => entry.isIntersecting)
                // aviod repeating
                if (!animation && isIntersecting) {
                    setAnimation(isIntersecting)
                }
            },
            { threshold: 0.5 }
        )
    }, [animation])

    return <div ref={section} className={`${footerStyle.footer} ${animation ? footerStyle["footer-conatiner"] : ""}`}>
        底部
    </div>
}