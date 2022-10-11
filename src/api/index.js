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