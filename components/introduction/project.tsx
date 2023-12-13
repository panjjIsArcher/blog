import { Project as ProjectType } from "@/type/brief"
import proStyle from "@/public/style/projects.module.scss";

export default function Project(props: ProjectType) {
    const { name, id, img, subTitle, url } = props
    const src: string = img.default.src;
    const change = (e: any) => {
        props.onChange({ name, id, img, subTitle, url })
    }

    return <div className={`${proStyle.item} item`} onClick={change} >
        <style jsx>
            {`.item{
                background-image: url("${src}");
        }`}
        </style>
    </div>
}