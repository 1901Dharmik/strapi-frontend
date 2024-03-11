import axios from "axios";
const params = {
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
        process.env.REACT_APP_API_URL_UPLOAD + url,
      params
    );
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const makeRequest = axios.create({
  baseURL: 'https://strapi-backend-ui4h.onrender.com/api',
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  },
});
