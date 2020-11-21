import React from "react"
import RouterCircle from "../../components/Router/routerCircle";
import "@/assets/css/index/index.less"

interface circleMenuProps {
    title: string,
    id: number | string
}

const circleMenu: circleMenuProps[] = [
    {title: 'JavaScript', id: 1},
    {title: 'html5', id: 2},
    {title: 'css3', id: 3},
    {title: 'vue', id: 4}
]

function Body() {
    return <div className='index-body'>
        <RouterCircle circleMenuProps={circleMenu}/>
    </div>
}

export default Body
