import axios from 'axios';

const BASE_URL = 'https://bravanfc.com';


interface LoginResponse {
  access_token?: string;
  username: string;
  userId?: string;
}

interface LogoutResponse {
  message?: string; 
}

// Function to authenticate user
const login = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${BASE_URL}/api/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};


const logout = async (): Promise<LogoutResponse> => {
  try {
    const response = await axios.post<LogoutResponse>(`${BASE_URL}/auth/logout`);
    return response.data;
  } catch (error) {
    console.error('Logout Error:', error);
    throw error;
  }
};

export { login, logout };