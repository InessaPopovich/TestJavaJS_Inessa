//створити 3 обʼєкти через {}
let obj1 = {};
let obj2 = {};
let obj3 = {};

console.log(obj1); //очікую, що виведе {}


//Можна дати певні значення(аргументи), цим об'єктам
let obj = {
  name: "Inessa",
  age:21,
  job:"QA"

};
console.log(obj); // очікую { name: 'Inessa', age: 21, job: 'QA' }


//створити 3 обʼєкти через Object()
let user1 = new Object1();
let user2 = new Object2();
let user3 = new Object3();


//створити обʼєкт на базі протиту іншого обʼєку
let obj_ = {
  vivesti: function(){     //властивість змінної, а не просто функція 
  console.log("Hello");
  }
};

let objectNew = Object.create(obj_);
console.log(objectNew);
objectNew.vivesti();


//створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
let engineer = {
  haha: function(){
    console.log("Inessa");
  }
};

let QA_engineer = Object.create(engineer);
console.log(QA_engineer);
QA_engineer.haha();






