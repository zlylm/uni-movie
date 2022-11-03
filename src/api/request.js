const BASE_URL = "https://test-h5-api.ixook.com";

const DEFAULT_HEADER = {
  "content-type": "application/json;charset=UTF-8"
};

const TIMEOUT = 5000;

function Request(param = {}) {
  let { url, method = "POST", data, timeout = TIMEOUT, headers = {} } = param;
  if (!url.includes("http")) {
    url = `${BASE_URL}${url}`;
  }
  return new Promise((resolve, reject) => {
    uni.request({
      url: url,
      method,
      data,
      timeout,
      header: {
        ...DEFAULT_HEADER,
        ...headers,
        'Authorization': uni.getStorageSync('token') || ""
      },
      success: res => {
        if (res.statusCode == 200) {
          if (res.data.code == 200) {
            resolve(res.data.data);
          } else {
            uni.showToast({
              icon: "none",
              title: res.data.message || "错误"
            });
            resolve(null);
          }
        } else if (res.statusCode == 401) {
          uni.clearStorageSync()
          uni.showToast({
            icon: "none",
            title: "未登录"
          });
        }
      },
      fail: err => {
        resolve(null);
      },
      complete: () => {}
    });
  });
}
export default Request;
