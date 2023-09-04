import { api, apiLikes } from "./apiConfig";

export const getDogs = async () => {
  try {
    const response = await api.get("/dogs-cats/dogs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteLikedPost = async (id) => {
  try {
    const response = await apiLikes.delete(`/like/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
