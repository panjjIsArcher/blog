import React from "react";
import SwiperItem from "./swiperItem";
import "@/assets/css/swiper/swiper.less"
import {swiper} from "../../mock/swiper";

function Swiper(){
    return <div className='swiper'>
        <div className='swiper-content'>
            {swiper.map((el,index,array)=> <SwiperItem index={index} key={el.label} swiperItemNum={array.length}></SwiperItem>)}
        </div>
    </div>
}

export default Swiper;
