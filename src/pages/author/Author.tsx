import React, {useState, useEffect} from "react"
import "@/assets/css/author/author.less"
import {Layout} from "element-react"
import UserCard from "../../components/user/user-card";
import UserDetail from "../../components/user/user-detail";
import "../../assets/css/animation/animation.less"

interface Props {

}


function Author(props: Props) {
    let [hei, changeHei] = useState(0);
    //获取左侧高度变化
    let getHei: (hei: number) => number = (hei): number => {
        changeHei(() => hei + 1);
        return hei
    };
    useEffect(() => {
        console.log(hei);
    })
    return <Layout.Row className='author'>
        <Layout.Col className='animation-top' span={8}>
            <UserCard getHei={getHei}/>
        </Layout.Col>
        <Layout.Col className='animation-top animation-deley' span={16}>
            <UserDetail leftHei={hei}/>
        </Layout.Col>
    </Layout.Row>
}

export default Author
