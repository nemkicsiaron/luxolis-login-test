type User = {
  username: null | string
  password: null | string
}

const validateUser: (user: User) => Promise<boolean> = async (user) => {
  console.log(import.meta.env.VITE_TEST_USERNAME, import.meta.env.VITE_TEST_PW)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
          user.username != null &&
          user.username.length >= 1 &&
          user.password != null &&
          user.password.length >= 1 &&
          user.username === import.meta.env.VITE_TEST_USERNAME &&
          user.password === import.meta.env.VITE_TEST_PW
      )
    }, 1) // Simulating a 1-second delay for asynchronous validation
  });
}

export default validateUser
