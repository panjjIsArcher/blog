import { Project as ProjectType } from "@/type/brief"
import proStyle from "@/public/style/projects.module.scss";
import Image from "next/image";

export default function Project(props: ProjectType) {
    const { name, id, img, subTitle } = props
    const change = (e: any) => {
        props.onChange({ name, id, img, subTitle })
    }
    return <div className={proStyle.item} onMouseEnter={change}>
        <Image layout="fill" src={img} className={proStyle.img} />
    </div>
}