const API_URL = 'https://reqres.in/api/'; // Replace with your API URL

export const customFetch = async (endpoint: string, options?: RequestInit) => {
  console.log('inside customFetch');
  const token = localStorage.getItem('token');
  console.log('🚀 ~ customFetch ~ token:', token);

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

  // If the response includes a token, store it in localStorage
  if (data.token) {
    localStorage.setItem('token', data.token);
  }

  return data;
};
