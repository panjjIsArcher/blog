import React from "react";
import "@/assets/css/index/index.less";
import {Dropdown} from 'element-react';
import {quickStartMenu, lang} from "./menu";

export interface Props {
    username?: string
}

//快速开始菜单
const menuOne = quickStartMenu.map((el, index) => {
    return <Dropdown.Item key={el.commond} command={el.commond}>
        {el.title}
    </Dropdown.Item>
})
//切换语言
const menuTow = lang.map((el, index) => {
    return <Dropdown.Item key={el.commond} command={el.commond}>{el.title}</Dropdown.Item>
});

const changeQuickStartMenu: (command?: string | undefined, instance?: any) => void = (command, instance): void => {
    console.log(command, instance)
}
const changeLang: (command: string | undefined, instance?: any) => void = (command, instance): void => {

}
const viewAuthor: () => void = (): void => {

}

function Header(props: Props) {
    return (
        <div className='header'>
            <div onClick={viewAuthor}>
                about me
            </div>
            {/*下拉菜单*/}
            <div>
                <Dropdown
                    onCommand={changeQuickStartMenu}
                    menuAlign='start'
                    menu={(<Dropdown.Menu> {menuOne} </Dropdown.Menu>)}>
                    <div className="el-dropdown-link fast-start">快速开始</div>
                </Dropdown>
            </div>
            <div>
                <Dropdown
                    onCommand={changeLang}
                    menuAlign="start"
                    menu={(<Dropdown.Menu>{menuTow}</Dropdown.Menu>)}
                >
                    <div className="el-dropdown-link fast-start">切换语言</div>
                </Dropdown>
            </div>
        </div>
    )
}

export default Header
