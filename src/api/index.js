import Request from './request.js';

export function homeAllData() {
	return Request({
		url: 'https://test-h5-api.ixook.com/index',
		method: 'get'
	})
}