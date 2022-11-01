import Request from './request.js';

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
