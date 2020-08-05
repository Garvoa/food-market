
export default [
  //主页
  {
    path: "/home",
    name: 'home',
    component: () => import('../pages/Home')
  },
  {
    path: "/pawnshop",
    name: 'pawnshop',
    component: () => import('../pages/Pawnshop')
  },
  {
    path: "/goodslist",
    name: 'goodslist',
    component: () => import('../pages/GoodsList')
  },
  {
    path: "/shoppingcart",
    name: 'shoppingcart',
    component: () => import('../pages/ShoppingCart')
  },
  {
    path: "/goodsdetails",
    name: 'goodsdetails',
    component: () => import('../pages/GoodsDetails')
  },
  {
    path: "/pay",
    name: 'pay',
    component: () => import('../pages/Pay')
  },
  {
    path: "/addaddress",
    name: 'addaddress',
    component: () => import('../pages/Addaddress')
  },
  {
    path: "/selectaddress",
    name: 'selectaddress',
    component: () => import('../pages/SelectAddress')
  },
  {
    path: "/payresults",
    name: 'payresults',
    component: () => import('../pages/PayResults')
  },
  {
    path: "/login",
    name: 'login',
    component: () => import('../pages/Login')
  },
  {
    path: "/register",
    name: 'register',
    component: () => import('../pages/Register')
  },
  {
    path: "/user",
    name: 'user',
    component: () => import('../pages/User')
  },
  {
    path: "/",
    redirect: "/home"
  }
]