/*
class Translation {
  constructor(word){
    this.word = word;
  }
  isEng(){

  }
  isSpa(){
    
  }
}


class Rectiangle {
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
}

class QuickRecipe {

}


class Person {
  constructor(fristName, lastName, votingAge) {
    this.fristName = fristName;
    this.lastName = lastName;
    this.votingAge = votingAge;
  }
}

console.log(new Person("Sam", "Blue", 18));
console.log(new Person("Alex", "Green", 25));



class Person2 {
  constructor(fristName, lastName){
    this.fristName = fristName;
    this.lastName = lastName;
  }
  getFullName(){
    return `${this.fristName} ${this.lastName}`;
  }
}


const person2 = new Person2("Ahmed", "Zakan");
console.log(person2.getFullName());



class Course {
  constructor(name, isCompleted){
    this.name = name;
    this.isCompleted = isCompleted;
  }
  getDescription(){
    if (this.isCompleted){
        return `You have completed the ${this.name} course.`;
    } else {
      return "No"
    }
  }
};

const course1 = new Course("Learn JavaScript", false);
console.log(course1.getDescription()); // "You are currently studying the Learn JavaScript course"
const course2 = new Course("Learn Programming", true);
console.log(course2.getDescription()); // "You have completed the Learn Programming course"




class User {
  constructor(fristName, lastName, perfix, age){
    this.fristName = fristName;
    this.lastName = lastName;
    this.perfix = perfix;
    this.age = age;
  }
  getFullName(){
    return `${this.prefix}. ${this.fristName} ${this.lastName}`
}
canVote(){
    if(this.age >= 18){
        return true
    }else {
        return false
    }
}
}

// Sample usage - do not modify
const user1 = new User("Sam", "Doe", "Mrs", 20);
console.log(user1.getFullName()); // "Mrs. Sam Doe"
console.log(user1.canVote()); // true
const user2 = new User("Alex", "Green", "Mr", 17);
console.log(user2.getFullName()); // "Mr. Alex Green"
console.log(user2.canVote()); // false







class User22 {
  constructor(age){
    this.age = age;
  }
  get age(){
   // console.log("age getter");
   return this._age;
  }
  set age(value){
    //console.log("age setter");
    this._age = Number.parseInt(value, 10);
  }
}
const user = new User22("30");
console.log(user.age); // 30 (number)
user.age = "31";
console.log(user.age); 


class Tasks {
  constructor(todos){
    this._todos = todos;
  }
  get todos(){
    return this._todos.join(", ")
  }
}
const tasks = new Tasks(["Laundry", "Clean kitchen"]);
console.log(tasks.todos); 


class Payment {
  constructor(amount){
    this.amount = amount;
  }
  get amount(){
    return this._cents;
  }
  set amount(value){
    this._cents= 100 * value;
  }
}
// Sample usage - do not modify
const payment = new Payment(10); // 10 USD
console.log(payment.amount); // 1000 (value in cents)
// apply discount
payment.amount = 7; // 7 USD
console.log(payment.amount); // 700 (value in cents)


class Config{
  static getYear(){
    const date = new Date();
    return date.getFullYear();
  }
}




class Discount {
  constructor() {
    this.amount = 1_000;
  }

  applyDiscount() {
    if (Discount.isValid()){
      this.amount = 500;
    }
  }
  static isValid(){
    return Math.random() <= 0.5;
  }
}
// Sample usage - do not modify
console.log(Discount.isValid()); // true or false
const discount = new Discount;
discount.applyDiscount();
console.log(discount.amount); // either 1000 or 500


class BookSale {
  constructor(){
    this.amount = 1_000;
    this.currency = "usd";
    this.isStudent = false;
    return this
  }

  applayStudenDiscount() {
    this.isStudent = true;
    this.amount = 800;
    return this;
  }

  setCurrency(currency){
    this.currency = currency;
    return this;
  }

  applaypercentageDiscount(percent){
    this.amount = this.amount - this.amount * percent / 100;
    return this;
  }
}

const bookSale = new BookSale;
bookSale.applayStudenDiscount().setCurrency("eur").applaypercentageDiscount(5);


class Employee {
  constructor(fristName, lastName){
    this.fristName = fristName;
    this.lastName = lastName;
  }
  getFullName(){
    return `${this.fristName} ${this.lastName}`;
  }
  getInitials(){
    return this.fristName[0] + this.lastName[0];
  }
}

class Manger extends Employee {
  getFullName() {
    return `${this.fristName} ${this.lastName} (manager)`;
}
  send(){
    console.log(`Sent performance review for current quarter`);
  }
}

const manager = new Manger("aaa", "ddd");
manager.send(); // logs "Sent performance review for gcurrent quarter"
manager.getFullName(); // "Sam Green"
manager.getInitials()

class User {
  constructor(fristName, lastName, age) {
    this.fristName = fristName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName(){
    return `${this.fristName} ${this.lastName}`
  }
  canVote(){
    return this.age >= 18;
  }
}

class Admin extends User {
  constructor(fristName, lastName, age, userType){
    super(fristName, lastName, age)
    this.userType = userType;
  }
  getFullName(){
    return `${this.fristName} ${this.lastName} [${this.userType}]`;
  }
  updateConfig(){
    return "Config updated"
  }
};

const user = new User("ahmed", "assss", 17);
console.log(user.canVote());
console.log(user.getFullName().toUpperCase());

const admin = new Admin("mooo", "qqqq", 25, "mas");
console.log(admin.canVote()); // true
console.log(admin.getFullName()); // "Alex Blue [admin]"
console.log(admin.updateConfig());
*/
function get_duplicate_elements(arr) {
  // write your code here
  return arr.filter(function(x, y){
      return arr.indexOf(x) !== y && arr.lastIndexOf(x) === y;
  });
}
console.log(get_duplicate_elements([10, 5, 9, 5]))


function findDuplicates(arr) {
  return arr.filter((x, y) => arr.indexOf(x) !== y && arr.lastIndexOf(x) === y);
}

let duplicateElements = findDuplicates([1, 2, 4, 2, 4, 5]);
console.log(duplicateElements); // [2, 4]


