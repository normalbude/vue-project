import VueRouter from "vue-router"
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Administrators from "@/pages/Administrators";
import Login from "@/components/Login";
import User from "@/pages/User";
import Goods from "@/pages/Goods";
const router = new VueRouter({
    routes:[
        {
          name:'login',
          path:'/login',
          component:Login
        },
        {
          path:'/',
            redirect: '/login'
        },
        {
            name:'administrator',
            path:'/administrator',
            component:Administrators,
            children:[
                {
                    name:'user',
                    path:'user',
                    component:User,
                    meta:{title:'用户'}
                },
                {
                    name:'goods',
                    path:'goods',
                    component:Goods,
                    meta:{title:'物资'}
                }
            ]
        },
        {
            name:'home',
            path:'/home',
            component:Home,
            meta:{title:'主页'}
        },
        {
            name:'register',
            path:'/register',
            component:Register,
            meta:{title:'注册'}
        },
    ]
})

router.afterEach((to, from) => {
    if(to.meta.title){
        document.title = to.meta.title
    }else {
        document.title = '登录'//设置初始标题
    }
})

export default router