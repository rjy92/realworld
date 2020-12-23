/**
 * 验证是否登录的中间件
 */
export default function ({ store, redirect }) {

    // 若不存在用户名，则部分页面跳转到登录页面
  if (!store.state.user) {
    return redirect('/login')
  }
}
