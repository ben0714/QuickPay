import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://reqres.in/api/'; // Replace with your API URL

export const UseFetch = async (endpoint: string, options?: RequestInit) => {
  try {
    const token = await AsyncStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options?.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();

    // If the response includes a token, store it in AsyncStorage
    if (data.token) {
      await AsyncStorage.setItem('token', data.token);
    }

    return data;
  } catch (error) {
    console.log('🚀 ~ customFetch ~ error:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
