//task :Fetch user data from a fake API (https://jsonplaceholder.typicode.com/users/1) and print it to the console.

//mock API -> https://jsonplaceholder.typicode.com/users
/**
 * 
 * npm install axios
const axios = require('axios');

// GET
axios.get(url)

// POST
axios.post(url, data)

// PUT
axios.put(url, data)

// DELETE
axios.delete(url)


const response = await axios.get(url);

response = {
  data: {},         // The actual data you want
  status: 200,      // HTTP status code
  statusText: 'OK',
  headers: {},      // Response headers
  config: {},       // The Axios config used for the request
  request: {}       // The request made
}
Usually, you only need response.data.


try {
  await axios.get('some-wrong-url');
} catch (error) {
  console.error(error.message);        // Error message
  console.error(error.response.status); // HTTP status code (like 404)
}

 * 
 * 
 * 
 * 
 */

//GET example
const axios = require('axios');
async function getUser() {
    //const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    //http://localhost:3000/students
    const res = await axios.get('http://localhost:3000/students');
    console.log(res.data);
  }
  getUser(); 
