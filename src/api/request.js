const BASE_URL = "https://test-h5-api.ixook.com"

const DEFAULT_HEADER = {
	'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
}

const TIMEOUT = 5000

function Request(param = {}) {
	let { url, method = 'POST', data, timeout = TIMEOUT, headers = {} } = param
	if (!url.includes("http")) {
		url = `${BASE_URL}${url}`
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method,
			data,
			timeout,
			header: {
				...DEFAULT_HEADER,
				...headers
			},
			success: res => {
				if (res.statusCode == 200) {
					if (res.data.code == 200) {
						resolve(res.data.data)
					}
				}
			},
			fail: err => {
				resolve(null)
			},
			complete: () => {}
		})
	})
}
export default Request;