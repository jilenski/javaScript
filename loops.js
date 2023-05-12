const contacts = [
  {
    id: 1,
    fullName: "Pedro Penduko",
    isSaved: "Phone",
  },
  {
    id: 2,
    fullName: "Pedro Penduko Sr",
    isSaved: "Phone",
  },
  {
    id: 3,
    fullName: "Nenang Penduko",
    isSaved: "SD",
  },
];

/*
//looping array objects using for of - *OPTIMIZED*
for (let contact of contacts) {
  // console.log(contact); //access all objects
  console.log(contact.fullName); //access particular object property
}
*/

/*
//looping array objects using forEach
contacts.forEach(function (contact) {
  console.log(contact.fullName);
});
*/

/*
//looping an array objects using for loop
for (let i = 0; i < contacts.length; i++) {
  console.log(contacts[i].fullName);
}
*/

/*
//for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//while loop
let i = 0;
while (i <= 10) {
  console.log(`While loop ang value ay ${i}`);
  i++;
}
*/
