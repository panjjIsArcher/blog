/*
* 前端页面的逻辑交互层
* */

/*
切换前端页面的文章分类
@param Object
id 分类id
page 获取表格的表单 默认是1
pageSize 获取表单的规格 默认是10
* */

const changeCatogory = async (param = {page: 1, pageSize: 10, id: 0}) => {
    console.log('切换前端页面');
    // 函数用于切换前端文章界面
    // 接受3个参数
    // page : 文章所在页码
    // pagesize: 单次请求获取文章数量
    // id : 1表示前端， 2表示后端 3表示html5
}

export {
    changeCatogory
}
