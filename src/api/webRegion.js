
import request from '@/plugins/axios'

// 获取省市区
const getRegionTree=data=>{
    return request({
        url:'gcgj-web/web-region/getRegionTree',
        data,
    })
}

// 获取商品列表
const queryGoodsSpuList=data=>{
    return request({
        url:'gcgj-web/web-goodsSpu/queryGoodsSpuList',
        data,
    })
}

// 获取图片列表
const queryPicture=data=>{
    return request({
        url:'gcgj-fdfs/picture/queryPicture',
        data,
    })
}



export {
    getRegionTree,
    queryGoodsSpuList,
    queryPicture
}