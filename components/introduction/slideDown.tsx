import sdStyle from "@/public/style/slideDown.module.scss";
export default function SlideDown() {
    return <div className={`${sdStyle.container} bg-universal`}>
        
        <div className={`${sdStyle.slide} ${sdStyle["slide-left-1"]}`} />
        <div className={`${sdStyle.slide} ${sdStyle["slide-left-2"]}`} />
         <div className={`${sdStyle.slide}  ${sdStyle["slide-right-1"]}`} />
        <div className={`${sdStyle.slide}  ${sdStyle["slide-right-2"]}`} /> 

        <p className={sdStyle.text}>slide down</p>
    </div>
}