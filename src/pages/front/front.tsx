import React from "react";
import Swiper from "../../components/swiper/swiper";
import {Layout} from "element-react";

function Front() {
    return <div className='front'>
        {/*轮播*/}
        <Layout.Row>
            <Layout.Col span={24}>
               <Swiper></Swiper>
            </Layout.Col>
        </Layout.Row>
    </div>
}

export default Front
