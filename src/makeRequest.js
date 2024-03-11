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
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization: "bearer " + '1e5e644fba85db3bd8adac23e4b3ca0ab636fc24b845af5fe20eab3800c6b22abc05f581a55a363175aad9a5a0021e6b9b2f6e83a9beecf2388989970eb8b03af6ddd2d29c211329d11f908321e3242912dfd27aa6de021657ae0dc13ab76ff274a215d3fca4bc42ed2dae84d13cf193e1153d87548d934cd0f8df993070b816',
  },
});
