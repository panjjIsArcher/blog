import React from "react";
import "@/assets/css/swiper/swiper.less";
import "@/assets/css/animation/animation.less";
import { zIndexCount } from "../../assets/js/swiper";

interface Prop{
    children?:any,
    index: number,
    swiperItemNum: number
}

function SwiperItem(prop:Prop){
    let { swiperItemNum ,index } = prop;
    let swiper_item_bottom = 'swiper-item-bottom'
    const showBottom = () => {
        swiper_item_bottom = `${swiper_item_bottom} animation-bottom`
    }
    const detail = prop.children?prop.children: (
        <div>  
            <div>
                { prop.index }
            </div>
            <div className='swiper-item-bottom animation-bottom'>
                默认
            </div>
        </div>);
    return <div>
        <div className='swiper-item' onMouseEnter={showBottom} style={{ zIndex: zIndexCount( swiperItemNum,index ) }}>
        { detail }
        </div>
    </div>
}
export default SwiperItem
