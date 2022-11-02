import Request from './request.js';
import { joinUrlParam } from "@/utils/index";
import { useStore } from "vuex";

function getToken() {
  const store = useStore()
  return {
    'Authorization': store.state.token
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

// user
export function userinfo() {
	return Request({
		url: `/user`,
    method: 'get',
    headers: getToken()
	})
}