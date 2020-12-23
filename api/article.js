import { request } from '@/plugins/request'

export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// 获取关注的用户的文章列表
export const getFeedArticles = params => {
    return request({
      method: 'GET',
      url: '/api/articles/feed',
      params
      //headers: {
        /* // 添加用户身份，
        // 数据格式：Token空格Token数据
        // Authorization: Token jwt.token.here
        // token可能会过期，古需要重新登录，重新添加tokenId
        Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDgxMTYsInVzZXJuYW1lIjoibHB6OTk5IiwiZXhwIjoxNTk3NzQxNTA4fQ.2yO8Fss4hYnvsIN2UYHsutQ1hmYqSSAA-UrIRnP4DOY` */
      //}
    })
  }

  export const addFavorite = slug=>{
    return request({
      method: 'POST',
      url:`/api/articles/${slug}/favorite`
    })
  }

  export const deleteFavorite = slug=>{
    return request({
      method: 'DELETE',
      url:`/api/articles/${slug}/favorite`
    })
  }

  export const getArticle = slug=>{
    return request({
      method: 'GET',
      url:`/api/articles/${slug}`
    })
  }