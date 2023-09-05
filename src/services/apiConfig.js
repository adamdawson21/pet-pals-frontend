import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

const getTokenLikes = () => {
  return new Promise((resolve) => {
    resolve(`Token ${localStorage.getItem("token") || null}`);
  });
};

export const api = axios.create({
  baseURL: "https://pet-pals-5f9adeeaa392.herokuapp.com/",
});

api.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = await getToken();
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export const apiLikes = axios.create({
  baseURL: "https://pet-pals-5f9adeeaa392.herokuapp.com/",
});

apiLikes.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = await getTokenLikes();
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

// export default api;
