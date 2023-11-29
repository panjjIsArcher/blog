// 监听元素的背景图是否加载完成
export const isBgImgLoaded = (mark: string) => {
    const dom: Element | null = document.querySelector(mark)
    if (!dom) {
        return
    }
    const reg = /url\(\"?(.*)\"\)/ig
    const cSSStyleDeclaration: CSSStyleDeclaration = window.getComputedStyle(dom)
    const background: string | null = cSSStyleDeclaration.backgroundImage
    if (!background) {
        return
    }
    const src: RegExpMatchArray | null = background.match(reg);
    if (!src) {
        return
    }
    const [first] = src
    const img: HTMLImageElement = new Image();
    img.src = first;
    img.onload = () => {

    }

}