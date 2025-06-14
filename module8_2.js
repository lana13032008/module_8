//задание1 и 2 и 3

let person = {
    name: "Алиса",
    age: 25,
    city: "Астана",
  
    
    greet: function() {
      console.log("Привет, меня зовут " + this.name + ", мне " + this.age + " лет!");
    }
  };

  console.log("Имя:", person.name);
  console.log("Возраст:", person.age);

  person.city = "Астана";
  console.log("Новый город:", person.city);

  person.greet();


//задание4

let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };

console.log(obj1 == obj2);  
console.log(obj1 === obj2);

//задание5

let book = {
    title: "1984",
    author: "George Orwell",
    details: {
      year: 1949,
      pages: 328
    }
  };
  
  let copiedBook = Object.assign({}, book);
  
  copiedBook.details.year = 2025;
  
  console.log("Оригинал (book.details.year):", book.details.year);      
  console.log("Копия (copiedBook.details.year):", copiedBook.details.year); 

//задание6

let calculator = {
    a: 5,
    b: 3,
  
    sum: function() {
      return this.a + this.b;
    },
  
    multiply: function() {
      return this.a * this.b;
    }
  };
  
  console.log("Сумма:", calculator.sum());        
  console.log("Произведение:", calculator.multiply()); 


  //задание7

  
const car = {
  brand: "Toyota",
  model: "Camry"
};

car.model = "Corolla";

console.log(car); 
