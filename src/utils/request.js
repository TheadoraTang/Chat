const service = axios.create({
  baseURL: "/",
  timeout: 5000,
  headers: {
    Accept: ["application/json"],
  },
});

service.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers = {
        ...config.headers,
        "X-Access-Token": token,
      };
    }
    return config;
  },
  (err) => {
    return err;
  }
);

service.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    message.destroy();
    if (err && err.response) {
      console.log(err);
      switch (err.response.status) {
        case 400:
          console.log("请求错误");
          break;
        case 401:
          console.log("未授权访问");
          break;
        case 404:
          console.log("请求资源不存在");
          break;
        case 500:
          console.log("服务器内部错误");
          break;
        default:
          console.log("其他错误信息");
      }
    }
    return err;
  }
);

const _POST = (url, params) => {
  return Promise((resolve, reject) => {
    service
      .post(url, data)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(res);
      });
  });
};

const _GET = (url, params) => {
  return Promise((resolve, reject) => {
    service
      .get(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
};
