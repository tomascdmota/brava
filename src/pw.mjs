import bcrypt from 'bcrypt'
const saltRounds = 10; // Number of salt rounds for bcrypt

function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}

// Example usage:
const plainPassword = 'carlos.magalhaes';
hashPassword(plainPassword)
  .then((hashedPassword) => {
    console.log('Hashed Password:', hashedPassword);
  })
  .catch((error) => {
    console.error('Error hashing password:', error);
  });