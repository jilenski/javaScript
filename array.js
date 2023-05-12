const Fruits = ["Manga", "Banana", "Grapes", "Pineapple"];

//adding new element
// Fruits[4] = "Santol"; //if you know the length
// Fruits.push("Santol"); //if you don't know the length
// Fruits.unshift("Santol"); //add in index[0]

//deleting element
// Fruits.pop(); //remove last element

// console.log(Fruits[2]); //display an element for a particular index

console.log(Array.isArray(Fruits)); //to check if the variable is an array

console.log(Fruits.indexOf("Manga")); //to check the index of an element

Fruits.splice(1, 1); //splice(startIndex, deleteCount)

console.log(Fruits); //display all elements in an array
