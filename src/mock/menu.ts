interface UserMenuItem {
    title: string,
    icon?: string,
    id: number | string,
    child: UserMenuSecondItem[]
}

interface UserMenuSecondItem {
    title: string,
    icon: string,
    id: number | string
}

//个人信息导航menu
const UserMenu: UserMenuItem[] = [
    {
        title: '基本信息',
        id: 1,
        icon: 'el-icon-document',
        child: [{id: 1, title: '基本信息', icon: 'el-icon-document',}]
    },
    {
        title: '从业经历',
        id: 2,
        icon: 'el-icon-message',
        child: [
            {id: 1, title: '2018年', icon: 'el-icon-date'},
            {id: 2, title: '2019年', icon: 'el-icon-date'},
            {id: 3, title: '2020年', icon: 'el-icon-date'}
        ]
    },
    {
        title: '自我评价',
        id: 3,
        icon: 'el-icon-star-on',
        child: [{id: 1, title: '性格', icon: 'el-icon-star-on',}]
    },
    {
        title: '联系方式',
        id: 4,
        icon: 'el-icon-search',
        child: [{id: 1, title: '联系方素', icon: 'el-icon-search'}]
    }
];

export {
    UserMenu
}
