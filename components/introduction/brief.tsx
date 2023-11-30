import briefStyle from "@/public/style/brief.module.scss";

const list = [
    {
        name: "experience"
    },
    {
        name: "skill stack"
    },
    {
        name: "connect me"
    }]


export default function Brief() {
    const ul = list.map((li, index, arr) => {
        const length = arr.length;
        const height = `${100 / length}%;`
        return <li key={li.name} style={{height}}>{li.name}</li>
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