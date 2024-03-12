// import axios from 'axios';

// const userService = {
//   async register(userData) {
//     try {
//       const response = await axios.post('api/auth/user-register', userData);
//       return response.data; 
//     } catch (error) {
//       throw new Error(error.response.data.message || 'Registration failed');
//     }
//   },
// };

// export default userService;

// services/userService.js

// const userService = {
//   async register(userData) {
//     // Make API call to register user
//     try {
//       // Example API call using fetch
//       const response = await fetch('api/auth/user-register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to register user');
//       }
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   },
// };

// export default userService;
