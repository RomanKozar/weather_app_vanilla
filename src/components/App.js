import { fetchData, url } from "./Api.js";
import * as module from "./Module.js";

/**
 *
 * @param {NodeList} elements
 * @param {string} eventType
 * @param {Function} callback
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (const element of elements) element.addEventListener(eventType, callback);
};

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-togglers]");

const toggleSearch = () => {
  searchView.classList.toggle("active");
  addEventOnElements(searchTogglers, "click", toggleSearch);
};
