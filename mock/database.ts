import { Describution, Job, Media, Project, Stack } from "@/type/brief"

export const data: Describution[] = [
    {
        describution: "my experience in developing software, websites and apps",
        id: 1
    },
    {
        describution: "what I could do for you",
        id: 2
    },
    {
        describution: "the clinets I had serverd and the projects I had built",
        id: 3
    },
    {
        describution: "contact me via social media",
        id: 4
    }
]

export const socialMedia: Media[] = [
    {
        app: "facebook",
        link: " www.baidu.com",
        icon: "icon-facebook-fill"
    },
    {
        app: "wechat",
        link: "lzpjj0911",
        icon: "icon-weixin"
    },
    {
        app: "phone",
        link: "178-8249-8450",
        icon: "icon-phone-iphone"
    },
    {
        app: "Google mail",
        link: "www.baidu.com",
        icon: "icon-gmail"
    },
    {
        app: "github",
        link: "icon-github",
        icon: "icon-github"
    },
    {
        app: "Tencent mail",
        link: "251907882@qq.com",
        icon: "icon-qq"
    }
]

export const stacks: Stack[] = [{
    name: "front-end",
    skills: ["JavaScript, es6, typescript", "css(3), scss, less", "w3c standard specifications", "http(s) protocol and API requests "]
},
{
    name: "full stack",
    skills: ["node.js, express.js", "MVC"]
},
{
    name: "architect",
    skills: ["front-end framework: vue.js, react.js", "SSR framework & next.js", "wordpress", "front-end performance optimization"]
},
{
    name: "design & PM",
    skills: ["Figma", "Xmind"]
}]

export const labels: string[] = ["front-end engineer", "full-stack engineer", "designer", "P.M", "Bachelor's Degree in Computer Science", "INFP", "crazy mad at C.S", "cat adopter"]

export const jobs: Job[] = [
    {
        name: "Before working",
        describution: "",
        subTitle: ""
    },
    {
        name: "Front-end Engineer",
        describution: "",
        subTitle: ""
    }, {
        name: "Full-stack Engineer",
        describution: "",
        subTitle: ""
    }, {
        name: "Designer & P.M",
        describution: "",
        subTitle: ""
    }]

export const ariticle = "这是文章的"

export const projects: Project[] = [
    { name: "Celine1", subTitle: "这是Celine的AR", img: require("../public/image/lack.jpg"), url: "", id: 1 },
    { name: "Celine2", subTitle: "这是Celine的AR", img: require("../public/image/sky.jpg"), url: "", id: 2 },
    { name: "Celine3", subTitle: "这是Celine的AR", img: require("../public/image/avatar.jpg"), url: "", id: 3 },
    { name: "Celine4", subTitle: "这是Celine的AR", img: require("../public/image/sky.jpg"), url: "", id: 4 }
]