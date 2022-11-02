import Request from './request.js';
import { joinUrlParam } from "@/utils/index";

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
    param
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
