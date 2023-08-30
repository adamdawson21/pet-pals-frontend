import api from './apiConfig';

export const fetchDogBreeds = async () => {
  try {
    const response = await api.get('/v1/breeds');
    const fetchedDogBreeds = response.data;
    return fetchedDogBreeds;
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    throw error;
  }
};

export const getDogs = async () => {
  try {
    const response = await api.get("/dogs");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDog = async (id) => {
  try {
    const response = await api.get(`/dogs/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};