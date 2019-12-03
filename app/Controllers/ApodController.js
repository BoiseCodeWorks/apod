import ApodService from "../Services/ApodService.js";
import store from "../store.js";

//Private
function _draw() {
  let apod = store.State.apod;
  console.log(apod);
}

//Public
export default class ApodController {
  constructor() {
    store.subscribe("apod", _draw);
  }

  async search() {
    event.preventDefault();
    let form = event.target;
    // @ts-ignore
    let date = form.date.value;
    try {
      await ApodService.searchAsync(date);
    } catch (e) {
      let errorElem = document.getElementById("error");
      errorElem.classList.remove("d-none");
      errorElem.innerText = e.response.data.msg;
    }
  }

  normalSearch() {
    event.preventDefault();
    let form = event.target;
    // @ts-ignore
    let date = form.date.value;
    ApodService.searchAsync(date).catch(e => {
      let errorElem = document.getElementById("error");
      errorElem.classList.remove("d-none");
      errorElem.innerText = e.response.data.msg;
    });
  }
}
