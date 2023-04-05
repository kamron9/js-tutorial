import data from "./modules/user.mjs";
import getData from "./modules/about.mjs";
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  getData(data);
});
