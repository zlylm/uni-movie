import Request from './request.js';

export function homeAllData() {
	return Request({
		url: '/index',
		method: 'get'
	})
}

export function movieDetail(id) {
	return Request({
		url: `/movies/${id}`,
		method: 'get'
	})
}
// 正在热映
export function theaterList(param) {
	return Request({
		url: `/movie/theater?rder=&page=${param.page}&per_page=${param.per_page}`,
    method: 'get',
	})
}
// top 100
export function topList(param) {
	return Request({
		url: `/movie/top?rder=&page=${param.page}&per_page=${param.per_page}`,
    method: 'get',
	})
}
// 短片
export function getVideos(param) {
	return Request({
		url: `/videos?rder=&page=${param.page}&per_page=${param.per_page}`,
    method: 'get',
	})
}
// 分类菜单数据
export function getCategories(param) {
	return Request({
		url: `/categories`,
    method: 'get',
	})
}
