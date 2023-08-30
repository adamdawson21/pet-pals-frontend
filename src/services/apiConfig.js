import axios from "axios";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

const apiKey = "live_gQ5sovSRTUWJjEt9nSbqodxPkPwNxMwhN5N1FPdMdYUMh75FraTvDQFAdr6kNEUR";

const api = axios.create({
  baseURL: "https://api.thedogapi.com"
});

api.interceptors.request.use(
  async (config) => {
    config.headers["Authorization"] = await getToken();
    config.headers["x-api-key"] = apiKey;
    return config;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
