const ul = document.querySelector("#ul");

function getData(item) {
  item.map((value) => {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "delete";
    let li = document.createElement("li");
    li.innerHTML = value.name;
    li.append(deleteBtn);
    ul.append(li);
    deleteBtn.addEventListener("click", () => {
      ul.removeChild(li);
    });
  });
}
export default getData;
