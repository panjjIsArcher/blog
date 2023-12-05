// 监听元素的背景图是否加载完成
export const isBgImgLoaded = async (mark: string): Promise<boolean> => {
  const dom: Element | null = document.querySelector(mark);

  if (!dom) {
    return false
  }
  const reg = /url\(\"?(.*)\"\)/;
  const cSSStyleDeclaration: CSSStyleDeclaration = window.getComputedStyle(dom);
  const background: string | null = cSSStyleDeclaration.backgroundImage;
  if (!background) {
    return false
  }
  const src: RegExpMatchArray | null = reg.exec(background);
  if (!src) {
    return false
  }

  const imgUrl: string | null = src[1];
  if (!imgUrl) {
    return false
  }

  const imgEl = await load(imgUrl);
  return !!imgEl;
};

export const load = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = src;
  });
};
