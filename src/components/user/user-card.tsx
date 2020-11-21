import React from "react";
import "../../assets/css/author/user-left.less";
import {Menu} from "element-react";
import {UserMenu} from "../../mock/menu";


interface Prop {
    parent?: any,
    getHei?: any
}


function UserCard(prop: Prop) {
    //获取高度
    const selectMenu: (index: undefined | string, path: undefined | string[]) => void = (index, path): void => {
        let hei = '';
        //延迟获取
        window.setTimeout(() => {
            hei = (document as any).querySelector('.el-menu-react').clientHeight;
            prop.getHei(hei);
        }, 350)

    }
    const headerDefault = require('../../assets/img/header-default.jpg');
    const MenuSubMenu = UserMenu.map((el, ind) => {
        const child = el.child.map((e, i) =>
            <Menu.Item index={`${el.id}-${e.id}`} key={e.id}>
                <i className={e.icon}/>
                {e.title}
            </Menu.Item>
        );
        return <Menu.SubMenu title={el.title} key={el.id} index={`${el.id}`}>
            {child}
        </Menu.SubMenu>
    })
    return (<div className='user-left'>
            {/*顶部card*/}
            <div className='header-img'>
                <div className='header-img-mask'/>
                <div className='header-image'>
                    <img alt='头像' src={headerDefault}/>
                </div>
                <div className='header-img-bottom'></div>
            </div>
            {/*中部card*/}
            <div className='header-info'>
                <div>
                    <Menu uniqueOpened={true}
                          className='el-menu-react '
                          onClose={selectMenu}
                          onOpen={selectMenu}>
                        {MenuSubMenu}
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
