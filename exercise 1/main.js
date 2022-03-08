//Create an application that prints out users information on submission of a form and saves the results to local storage

//submit user info on a form
// print user ninfo from form
//save user info to local storage

// get user input [x]
// add Event listener [x]
// printing this information out [X]
// save this to local storage []

// const names = ["John Doe", "Amy Songwriter"]
// localStorage.setItem("names", JSON.stringify(names))
// const getNames = JSON.parse(localStorage.getItem("names"))

// console.log(getNames)

const userInfo = document.querySelector(".info-input");
const myButton = document.querySelector(".btn");
const getUserArray = JSON.parse(localStorage.getItem("userArray")) || [];
const userArray = getUserArray;

console.log(getUserArray);

getUserArray.forEach((saveInfo) => {
    const container = document.getElementById("container");

    container.innerHTML += `
  <li>${saveInfo}</li>
  `;
});

// First Iteration
// saveInfo = "user info"
// print user info -> append to the container element

function printInfo(e) {
  // Saves info to local storage
  userArray.push(userInfo.value);
  localStorage.setItem("userArray", JSON.stringify(userArray));

  // Prevents page reload
  e.preventDefault();
  console.log(userInfo.value);

  // Prints user info
  //   Adding li elements with the content user input into the element with id 'container'
  const container = document.getElementById("container");

  container.innerHTML += `
<li>${userInfo.value}</li>
`;
}

myButton.addEventListener("click", printInfo);
