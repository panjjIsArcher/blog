import React, {useRef, useState} from "react";
import SwiperItem from "./swiperItem";
import Swiper from "react-id-swiper";
import {frontSwiperItem} from "../../mock/front"

function MySwiper() {
    const [swiper, setSwiper] = useState(null);
    const ref = useRef(null);
    const goNext = () => {
        if (ref && ref.current !== null && swiper) {
            // swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (ref && ref.current !== null && swiper) {
            // swiper.slidePrev();
        }
    };
    const swi = frontSwiperItem.map(el => {
        return <div className='swiper-div' key={el.id}>
            <SwiperItem item={el}/>
        </div>
    })
    return <div className='my-swiper'>
        <Swiper ref={ref}>
            {swi}
        </Swiper>
        <button onClick={goPrev}>Prev</button>
        <button onClick={goNext}>Next</button>
    </div>
}

export default MySwiper;
