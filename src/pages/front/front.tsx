import React from "react";
// import Swiper from "../../components/swiper/swiper";
import { Layout } from "element-react";
import AriticleList from "../ariticleList/ariticleList";
import "../../assets/css/front/front.less"
function Front() {
    return <div className='front'>
        { /*轮播*/ }
        <Layout.Row>
            <Layout.Col span={24}>
                <div className='ariticle-container'>
                    <AriticleList></AriticleList>
                </div>
                {/*<Swiper></Swiper>*/}
            </Layout.Col>
        </Layout.Row>
    </div>
}

export default Front
