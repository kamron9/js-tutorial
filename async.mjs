async function getData() {
  try {
    const { data, number } = await import("./test.mjs");
    console.log(data, number);
  } catch (error) {
    console.log("error");
  }
}
getData();

const getInfo = (id, name, username) => {
  console.log(id, name, username);
};

const getUser = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
    data.map(({ name, id, username }) => getInfo(id, name, username));
  } catch (err) {
    console.log("something went wrong");
  }
};
getUser();
