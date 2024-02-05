import axios from 'axios';
import { decodeToken } from 'react-jwt';

const loginAttempts = async (userData) => {
  for (const user of userData) {
    const { email, password } = user;

    try {
      const response = await axios.post('http://localhost:4001/api/login', {
        email,
        password,
      });

      const { token } = response.data;
      const { userId } = decodeToken(token);

      console.log(`Login successful for user ${user.username}`);
    } catch (error) {
      console.log(`Login failed for user ${email}: ${error.response.data.message}`);
    }
  }
};

// Example user data with hashed passwords
const usersData = [
  // Add more user data as needed
];

// Call the function to perform login attempts
loginAttempts(usersData);
