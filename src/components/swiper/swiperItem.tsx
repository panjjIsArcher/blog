import React from "react";

interface Prop {
    item?: Item
}

interface Item {
    title: string,
    id: string | number
}

function SwiperItem(props: Prop) {
    let {item: Item} = props;
    return <div>
       {/*卧槽，还能这么写*/}
        {props.item?.title}
    </div>
}

export default SwiperItem;
