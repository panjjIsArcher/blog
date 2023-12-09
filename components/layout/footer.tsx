import { useEffect, useRef, useState } from "react"
import { intersectionObserver } from "@/public/utils/deviceAdapter"
import footerStyle from "@/public/style/footer.module.scss"
import { socialMedia } from "@/mock/database"
import { Media } from "@/type/brief"
export default function Footer() {
    const [animation] = useState(false)
    const [medium, setMedium] = useState<Media[]>([])
    const [app, setApp] = useState("")
    const section = useRef(null)

    const fetchMedia = async () => {
        const medium: Media[] = socialMedia
        return medium
    }

    const start = (e: any) => {
        const app = e.target.dataset.app
        setApp(app)
    }

    const setUl = () => {
        const height = `calc(100vw / 16)`
        const length = medium.length
        return medium.map(media => {
            return <li key={media.app} className={`${footerStyle["width-" + length]}`}>
                <i className={`${media.icon} iconfont ${app === media.app ? footerStyle['i-active'] : ''}`} data-app={media.app} onMouseEnter={start} />
                <span className={`icon-V iconfont ${footerStyle.drop} ${media.app === app ? footerStyle.droping : ""}`} />
                <span className={`icon-V iconfont ${footerStyle.drop} ${media.app === app ? footerStyle.droping : ""}`} />
                <span className={`icon-V iconfont ${footerStyle.drop} ${media.app === app ? footerStyle.droping : ""}`} />
                <div className={footerStyle.waves}>
                    <div className={`${footerStyle.wave} wave`} />
                    <div className={`${footerStyle.wave} wave`} />
                    <div className={`${footerStyle.wave} wave`} />
                    <div className={`${footerStyle.wave} wave`} />
                    <style jsx>
                        {`.wave{
                            height: ${height};
                            width: ${height};
                        }`
                        }
                    </style>
                </div>
                <div className={`${footerStyle.pool} pool`}>
                    <style jsx>
                        {`.pool{ height:${height};}`}
                    </style>
                </div>


            </li>
        })
    }

    // 监听animation
    useEffect(() => {
        const fetch = async () => {
            const medium = await fetchMedia()
            setMedium(medium)
        }
        // 监听页面
        intersectionObserver(section.current,
            async (entries) => {
                const isIntersecting: boolean = entries.every((entry: { isIntersecting: boolean }) => entry.isIntersecting)
                // aviod repeating
                if (!animation && isIntersecting) {
                    await fetch()
                    setUl()
                }
            },
            { threshold: 0.5 }
        )
    }, [animation])

    return <div ref={section} className={footerStyle.footer}>
        <ul className={footerStyle.medium}>
            {setUl()}
        </ul>
        <div className={footerStyle.base}>sss</div>
    </div>
}