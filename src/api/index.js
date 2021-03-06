import ajax from "./ajax"
// import mockAjax from "./mockAjax"

//获取轮播图数据
// export const getBannerList = () => ajax.get('/API/banner/list')

//獲取輪播圖詳細信息
export const getBannerList = (position) => ajax.get(`/API/banner/position/${position}`)

//獲取菜單頁面詳細信息
export const getMenupageInfo = () => ajax.get('/API/menupage/getInfo')

//獲取菜單選項詳細信息


export const getMenumodInfo = (data) => ajax.post(`/API/menumod/query`, data)
// export const getMenumodInfo = (data) => mockAjax.get(`/API/menumod/query`)

export const getPay = (data) => ajax.post('/API/order/insertOrder', data)

export const getPayType = () => ajax.get('/API/paypage/list')
export const getPayOrder = (data) => ajax.post('/API/order/payOrder', data)

