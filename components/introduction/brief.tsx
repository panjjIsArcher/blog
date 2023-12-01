import briefStyle from "@/public/style/brief.module.scss";

const list = [
    {
        name: "experience"
    },
    {
        name: "skill stack"
    },
    {
        name:"projects"
    },
    {
        name: "connect me"
    }]


export default function Brief() {

    const ul = list.map((li, index, arr) => {
        const length = arr.length;
        return (<li key={li.name} id={li.name} >{li.name}
            <style jsx>{`li{height:${100 / length}%;}`} </style>
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