//Get (All the variables needed for the first three steps.)
let first = "Richard";
let last = "Perez";
var button = document.querySelector("button");
var p = document.querySelector("p");

//Behavior (Log my name out to the console.)
//Step 1 is satisfied.
console.log(first + " " + last);

//All the things the button needs to do.
//Step 2 & 3 are satisfied.
function toggle() {
  //Log my name out to the console, after you click the button consecutively.
  console.log(first + " " + last);

  //Create a new paragraph entity in HTML, every single time someone clicks the button.
  p.innerHTML += `<p>${first} ${last}</p>`;
}

//Getting an array of my hobbies.
//Step 4 is satisfied.
let hobbies = ["Music", "Video Games", "Writing"];

//The array loop in the console.
//Step 5 is satisfied.
for (let i = 0; hobbies.length > i; i++) {
  // Log all three hobbies to the console, until i becomes larger than the length of the array.
  console.log(hobbies[i]);
}

//Wire
button.addEventListener("click", toggle);
