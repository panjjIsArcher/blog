import { Project as ProjectType } from "@/type/brief"
import proStyle from "@/public/style/projects.module.scss";
import Image from "next/image";

export default function Project(props: ProjectType) {
    const { name, id, img, subTitle } = props
    return <div className={proStyle.item}>
        <Image layout="fill" src={img} className={proStyle.img} />
        <div className={proStyle.cover}>
            <p>{name}</p>
            <p>{subTitle}</p>
        </div>
    </div>
}