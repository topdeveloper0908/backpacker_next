// Import axios library
import axios from "axios";

// Server Api Url
// const serverUrl = `${process.env.API_BASE_URL}`;
const serverUrl = 'https://api.viator.com/partner/';
const apiKey = '09c53b4a-1e6a-4aea-89cc-7ddf5a293e4f';
// const apiKey = '66638bf8-8689-448e-9011-2a4e0783f26d';
// Create an instance of axios with the base URL and headers
const axiosClient = axios.create({
    baseURL: serverUrl,
    headers: {
        Accept: "application/json",
        "Accept-Language": "en-US",
        "exp-api-key": apiKey,
        "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
});

// Export the axios client instance
export default axiosClient;