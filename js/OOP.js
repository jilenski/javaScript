/*
//constructor function
function Tao(firstName, lastName, bloodType) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.bloodType = bloodType;

  this.getFullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}
*/

//class
class Tao {
  constructor(firstName, lastName, bloodType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bloodType = bloodType;
  }

  //method
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//instantiate object
const tao1 = new Tao("Pedro", "Penduko", "A");
const tao2 = new Tao("Nenang", "Penduko", "B");

// console.log(tao1); //get all the data
// console.log(tao1.firstName); //get specific data
console.log(tao1.getFullName()); //get method
console.log(tao2);
