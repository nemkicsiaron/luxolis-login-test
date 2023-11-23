type User = {
  username: null | string;
  password: null | string;
}

const validateUser = async (user: User) => {
  // Simulate asynchronous validation
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulating that the input is valid
      resolve(
        !!user && !!user.username && !!user.password &&
        user.username === import.meta.env.VITE_TEST_USERNAME &&
        user.password === import.meta.env.VITE_TEST_PW);
    }, 1); // Simulating a 1-second delay for asynchronous validation
  });
};

export default validateUser;
