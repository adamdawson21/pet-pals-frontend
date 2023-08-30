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
