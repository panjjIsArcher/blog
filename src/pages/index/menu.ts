interface quickStartMenuProps {
    commond: string  | undefined,
    title: string
}
interface langPorps {
    commond: string  | undefined,
    title: string
}
const quickStartMenu: quickStartMenuProps[] = [
    {commond: '1', title: '前端'},
    {commond: '2', title: '后端'},
    {commond: '3', title: '其他'}
]
const lang: langPorps[] = [
    {commond: '1', title: '简体中文'},
    {commond: '2', title: 'English'}
]
export {
    quickStartMenu,
    lang
}
