// ariticleList 组件
// 文章列表页
import "../../assets/css/ariticleList/ariticle-list.less"
import React from "react";
import {Menu} from "element-react"
import {changeCatogory} from "../front/frontJS";

function ariticleList() {
    const frontMenu = [
        {label: 'html', id: 1},
        {label: 'css', id: 2},
        {label: 'JavaScript', id: 3},
        {label: 'vue/react/angular', id: 4},

    ]
    const menu = frontMenu.map(e => <Menu.Item key={e.id} index={e.id.toString()}>
        {e.label}
    </Menu.Item>)
    return (<div className='ariticle-list'>
        <div className='left'>
            <Menu defaultActive="2" className='menu'>
                {menu}
            </Menu>
        </div>
        <div className='right'>
            <div className='content'> 右侧</div>
        </div>
    </div>)
}

export default ariticleList
