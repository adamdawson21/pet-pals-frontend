import { api, apiLikes } from "./apiConfig";

export const getCats = async () => {
  try {
    const response = await api.get("/dogs-cats/cats");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCat = async (id) => {
  try {
    const response = await api.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPosts = async (id) => {
  try {
    const response = await api.get(`/post/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
