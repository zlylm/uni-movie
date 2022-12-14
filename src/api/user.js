import Request from './request.js';
import { joinUrlParam } from "@/utils/index";

function getToken() {
  return {
    'Authorization': uni.getStorageSync('token')
  }
}

// 注册
export function register(param) {
	return Request({
		url: '/register',
    method: 'post',
    data: param
	})
}
// 登录
export function login(param) {
	return Request({
		url: '/login',
    method: 'post',
    data: param
	})
}
// 图形验证码
export function captcha(param) {
	return Request({
		url: `/captcha`,
    method: 'get',
	})
}
// 验证图形验证码
export function code(param) {
	return Request({
		url: joinUrlParam(`/code`, param),
    method: 'get',
	})
}
// 个人中心 收藏统计
export function collectionsCount() {
	return Request({
		url: `/user/collections/count`,
    method: 'get',
    headers: getToken()
	})
}

// 用户信息
export function userinfoReq() {
	return Request({
		url: `/user`,
    method: 'get',
    headers: getToken()
	})
}
// 影人 关注post/取关delete  
export function collections(params) {
	return Request({
		url: `/user/actors/${params.id}/collections`,
    method: params.method
	})
}
// 演员详情
export function getActorDetail(params) {
  return Request({
		url: `/actors/${params.id}`,
    method: 'get',
	})
}