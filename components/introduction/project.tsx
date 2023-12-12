import { Project as ProjectType } from "@/type/brief"
import proStyle from "@/public/style/projects.module.scss";

export default function Project(props: ProjectType) {
    const { name, id } = props
    return <div>
        {name}

    </div>
}