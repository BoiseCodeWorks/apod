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

  search() {
    event.preventDefault();
    let form = event.target;
    // @ts-ignore
    let date = form.date.value;
    ApodService.search(date)
  }
}
