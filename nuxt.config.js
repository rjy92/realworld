/* nuxt 配置文件 */
module.exports = {
    // 自定义路由规则
    router: {
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            //清空路由表
            routes.splice(0);
            routes.push(...[
                {
                    path:'/',
                    component:resolve(__dirname,"pages/layout/"),
                    children : [{
                        path:'', //默认子路由
                        name:'home',
                        component:resolve(__dirname,"pages/home/"),
                    },
                    {
                        path:'/login', //默认子路由
                        name:'login',
                        component:resolve(__dirname,"pages/login/"),
                    },
                    {
                        path:'/register', 
                        name:'register',
                        component:resolve(__dirname,"pages/login/"),
                    },
                    {
                        path:'/profile/:username', //默认子路由
                        name:'profile',
                        component:resolve(__dirname,"pages/profile/"),
                    },
                    {
                        path:'/settings', //默认子路由
                        name:'settings',
                        component:resolve(__dirname,"pages/settings/"),
                    },
                    {
                        path:'/editor', //默认子路由
                        name:'editor',
                        component:resolve(__dirname,"pages/editor/"),
                    },
                    {
                        path:'/article/:slug', //默认子路由
                        name:'article',
                        component:resolve(__dirname,"pages/article/"),
                    }]
                }
               
            ])
          }
    },
    // 注册插件
    plugins: [
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]

}
