import bcrypt from 'bcrypt'

// Function to hash a password
// Function to check a plaintext password against a hashed password
async function checkPassword(plaintextPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plaintextPassword, hashedPassword);
    return match;
  } catch (error) {
    console.error('Error checking password:', error);
    throw error; // You may want to handle this error differently based on your application's requirements
  }
}

// Example usage
const plaintextPasswordToCheck = 'joao.domingues';
const hashedPasswordFromDatabase = '$2b$10$I7PWO4NDr66.P77CsmfB5O.al37O4Uq8gnh5HhXjGm.otRpjFLuxy';

checkPassword(plaintextPasswordToCheck, hashedPasswordFromDatabase)
  .then((passwordsMatch) => {
    if (passwordsMatch) {
      console.log('Password is correct!');
    } else {
      console.log('Password is incorrect!');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });