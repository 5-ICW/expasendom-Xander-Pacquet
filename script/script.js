/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
    id: 1,
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
    id: 2,
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
    id: 3,
  },
];

// hieronder komt jullie code - veel succes

const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const filterTxt = document.querySelector("#filter");
const registreetBtn = document.querySelector("#registreer");
const filterBtn = document.querySelector("#filterbtn");

registreetBtn.addEventListener("click", (e) => {
  if (filterTxt.value == "") {
    fillSelect(userName, users, "id", "fullname", "email", "password");
  } else {
    const filtered = users.filter((newUser) =>
      newUser.name
        .toLocaleLowerCase()
        .includes(filterTxt.value.toLocaleLowerCase())
    );
    console.log(filtered);
    fillSelect(userName, filtered, "id", "fullname", "email", "password");
  }
});

filterBtn.addEventListener("click", (e) => {
  if (filterTxt.value == "") {
    fillSelect(userName, userEmail, users, "email");
  } else {
    const filtered = users.filter((newUser) =>
      newUser.name
        .toLocaleLowerCase()
        .includes(filterTxt.value.toLocaleLowerCase())
    );
    console.log(filtered);
    fillSelect(userName, filtered, "email");
  }
});
//functie aanmaken
function fillSelect(element, list, valueOption, inhoud) {
  element.innerHTML = "";
  list.forEach((item) => {
    const newOption = document.createElement("option");
    newOption.value = item[valueOption];
    newOption.innerHTML = item[inhoud];

    element.appendChild(newOption);
  });
}

btnToevoegen.addEventListener("click", () => {
  addLogin(fullname.value, password.value);
  console.log(users);
});
