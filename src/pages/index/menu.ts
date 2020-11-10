interface quickStartMenuProps {
    commond: string | undefined,
    title: string,
    router: string
}

interface langPorps {
    commond: string | undefined,
    title: string,
    router?: string
}

const quickStartMenu: quickStartMenuProps[] = [
    {commond: '1', title: '前端', router: 'front'},
    {commond: '2', title: '后端', router: 'behind'},
    {commond: '3', title: '其他', router: 'other'}
]
const lang: langPorps[] = [
    {commond: '1', title: '简体中文'},
    {commond: '2', title: 'English'}
]
export {
    quickStartMenu,
    lang
}
