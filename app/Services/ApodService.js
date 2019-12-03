import Store from "../store.js";

// @ts-ignore
let _apodApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  timeout: 8000
});

class ApodService {
  search(date) {
    _apodApi
      .get("apod?api_key=DEMO_KEY&date=" + date)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.error(e);
      });
  }
}

const service = new ApodService();
export default service;
