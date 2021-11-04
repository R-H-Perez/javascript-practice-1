//Get (All the variables needed.)
let first = "Richard";
let last = "Perez";
var button = document.querySelector("button");
var p = document.querySelector("p");

let hobbies = ["Music", "Video Games", "Writing"];

//Behavior (Log my name out to the console.)
console.log(first + " " + last);

//All the things the button needs to do.
function toggle() {
  //Log to the console.
  console.log(first + " " + last);

  //Create a new paragraph.
  p.innerHTML += `<p>${first} ${last}</p>`;
}

//The array loop in the console.
for (let i = 0; hobbies.length > i; i++) {
  // Log all three hobbies to the console, until i becomes larger than the length of the array.
  console.log(hobbies[i]);
}

//Wire
button.addEventListener("click", toggle);
