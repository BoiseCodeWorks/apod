import Store from "../store.js";
import store from "../store.js";

// @ts-ignore
let _apodApi = axios.create({
  baseURL: "https://api.nasa.gov/planetary",
  timeout: 8000
});

class ApodService {
  search(date) {
    return _apodApi.get("apod?api_key=DEMO_KEY&date=" + date).then(res => {
      store.commit("apod", res.data);
    });
  }

  async searchAsync(date) {
    let res = await _apodApi.get("apod?api_key=DEMO_KEY&date=" + date);
    store.commit("apod", res.data);
  }
}

const service = new ApodService();
export default service;
