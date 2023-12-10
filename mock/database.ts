import { Describution, Media, Stack } from "@/type/brief"

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
        app: "mail",
        link: " www.baidu.com",
        icon: "icon-gmail"
    },
    {
        app: "QQ",
        link: " www.baidu.com",
        icon: "icon-weixin"
    }
]

export const stacks: Stack[] = [{
    name: "front-end",
    skills: ["JavaScript, es6, typescript", "css(3),scss,less", "w3c standard specifications", "http(s) protocol and API requests "]
},
{
    name: "full stack",
    skills: ["node.js, express.js", "MVC"]
},
{
    name: "architect",
    skills: ["front-end framework: vue.js, react.js", "SSR framework & next.js", "Workpress", "front-end performance optimization"]
},
{
    name: "design & PM",
    skills: ["Figma", "Xmind"]
}

]
