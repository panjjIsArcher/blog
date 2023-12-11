import loadingStyle from "@/public/style/loading.module.scss";

export default function Loading() {
    return <div className={loadingStyle.container}>
        <div className={loadingStyle.box}>
            <div className={`${loadingStyle.fonts} ${loadingStyle.icon}`}>
                <span className={`${loadingStyle.moon} ${loadingStyle.star} icon-yueliang iconfont`} />
                <span className={`${loadingStyle.star} ${loadingStyle.sun} icon-Sunny iconfont`} />
            </div>

        </div>

    </div>
}