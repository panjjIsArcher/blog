export interface Describution {
    describution: string,
    id: number
}

export interface Media {
    app: string,
    link: string,
    icon: string
}

export interface Stack {
    name: string,
    skills: string[]
}

export interface Job {
    name: string,
    describution: string,
    subTitle: string
}

export interface Project {
    [x: string]: any,
    name: string,
    id: number,
    subTitle: string,
    img: string,
    url: string
}