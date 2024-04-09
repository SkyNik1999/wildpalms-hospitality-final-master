import axios from 'axios';

export const getAllProperties = async () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await axios.get(`${apiUrl}/properties/view`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Fetching properties failed', response.statusText);
    }
  } catch (error) {
    console.error('Error', error.message);
  }
};

export const getPopularProperties = async () => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await axios.get(`${apiUrl}/properties/view/popular`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Fetching properties failed', response.statusText);
    }
  } catch (error) {
    console.error('Error', error.message);
  }
}
 
export const getPropertyByKey = async key => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await axios.get(`${apiUrl}/properties/view/${key}`);

    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Fetching properties failed', response.statusText);
    }
  } catch (error) {
    console.error('Error', error);
  }
};
