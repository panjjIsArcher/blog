import React from "react";
import "../../assets/css/author/user-detail.less"
import "../../assets/css/animation/animation.less";
interface Prop {
    leftHei?: number
}

function UserDetail(props: Prop) {
    let rightHei: number | undefined = props.leftHei ? props.leftHei : 0 + 81;
    return <div className='user-detail'>
        <div className='user-detail-mask'/>
        <div className='user-detail-content heiChange' style={{height: rightHei + 80 + 'px'}}>
            {props.leftHei}
        </div>
    </div>
}

export default UserDetail
