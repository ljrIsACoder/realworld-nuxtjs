import { request } from '@/plugins/request'

// 获取用户个人信息
export const getProfile = username => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`
  })
}

// 添加关注
export const addFollowing = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

// 取消关注
export const deleteFollowing = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}