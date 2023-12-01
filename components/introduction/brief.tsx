import briefStyle from "@/public/style/brief.module.scss";

const list = [
    {
        name: "experience"
    },
    {
        name: "skill stack"
    },
    {
        name: "projects"
    },
    {
        name: "connect me"
    }]


export default function Brief() {

    const ul = list.map((li, index, arr) => {
        const length = arr.length;
        const gap = 65 - 10 * index;
        return (<li key={li.name} id={li.name} >
            <span className={briefStyle.title}> {li.name}</span>
            <style jsx>{`li{height:${100 / length}%;width:${100}%}`} </style>
            <span className={briefStyle.block} />
        </li>)
    })

    return <div className={briefStyle.brief}>
        <div className={briefStyle.left} >
            <ul className={briefStyle.menu} >
                {ul}
            </ul>
        </div>
        <div className={`${briefStyle.right} `} />
    </div>
}