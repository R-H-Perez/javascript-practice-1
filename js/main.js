//Get
let first = "Richard";
let last = "Perez";
var button = document.querySelector("button");
var p = document.querySelector("p");

let hobbies = ["Music", "Video Games", "Writing"];

//Behavior
console.log(first + " " + last);

//All the things the button needs to do.
function toggle() {
  console.log(first + " " + last);
  p.innerHTML += `<p>${first} ${last}</p>`;
}

//The array loop in the console.
for (let i = 0; hobbies.length > i; i++) {
  console.log(hobbies[i]);
}

//Wire
button.addEventListener("click", toggle);
