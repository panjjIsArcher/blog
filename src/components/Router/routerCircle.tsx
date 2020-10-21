import React from "react"
import "./router.less"

interface circleMenu {
    title: string,
    id: number | string
}

interface Props {
    circleMenuProps: circleMenu[]
}

function circleTitleClassName(arr: circleMenu[]): string {
    let length = arr.length;
    if (length === 0) {
        return ''
    } else if (length === 1) {
        return 'circle-small-item-one'
    } else if (length === 2) {
        return 'circle-small-item-tow'
    } else {
        return 'circle-small-item-more'
    }

}

function smallCircle(arr: circleMenu[]) {

}

function RouterCircle(props: Props) {
    let circleTitleNum = circleTitleClassName(props.circleMenuProps);
    smallCircle(props.circleMenuProps)
    const circleTitle = props.circleMenuProps.map(el => <span
        key={el.id}
        className={circleTitleNum + ' circle-small-item'}
    >{el.title}</span>)
    return <div className='router-circle'>
        <div className='small-circle-gp'>
            {circleTitle}
        </div>
        <div>
            <div className='circle'></div>
        </div>
    </div>
}

export default RouterCircle
