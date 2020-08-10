
export default [
  //主页
  {
    path: "/home",
    name: 'home',
    component: () => import('../pages/Home')
  },


  {
    path: "/shoppingcart",
    name: 'shoppingcart',
    component: () => import('../pages/ShoppingCart')
  },

  {
    path: "/pay",
    name: 'pay',
    component: () => import('../pages/Pay')
  },
  {
    path: "/attributelist",
    component: () => import('../pages/AttriButeList')
  },
  //订单详情
  {
    path: "/shoplist",
    component: () => import('../pages/ShopList')
  },

  //支付页
  {
    path: "/pay",
    component: () => import('../pages/Pay')
  },
  {
    path: "/goodslist",
    name: 'goodslist',
    component: () => import('../pages/GoodsList')
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