import React from "react"
import "@/assets/css/author/author.less"
import {Layout} from "element-react"
import UserCard from "../../components/user/user-card";

interface Props {

}

function Author(props: Props) {
    return <Layout.Row className='author'>
        <Layout.Col span={8}>
            <UserCard/>
        </Layout.Col>
        <Layout.Col span={16}>
            右侧
        </Layout.Col>
    </Layout.Row>
}

export default Author
