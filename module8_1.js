//задание1

function greet() {
    console.log("Привет, мир!");
  }
  
  greet(); 
  

//задание2

function sayHello(name) {
    console.log("Привет, " + name + "!");
  }
  
  sayHello("Алиса");


//задание3

function sum(a, b) {
    return a + b;
  }
  
  let result = sum(5, 7);
  console.log(result); 
  
//задание4
function isEven(number) {
    return number % 2 === 0;
  }
  
  console.log(isEven(4));  
  console.log(isEven(7));  
  console.log(isEven(0)); 


//задание5

function max(a, b) {
    if (a > b) {
      return a;
    } else if (b > a) {
      return b;
    } else {
      return "Числа равны";
    }
  }
  
  console.log(max(10, 5));   
  console.log(max(7, 20));  
  console.log(max(15, 15));


//задание6
function getInitials(firstName, lastName) {
    return firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase() + '.';
  }
  

  console.log(getInitials("Алиса", "Иванова"));  
  console.log(getInitials("иван", "Андреев"));   
  console.log(getInitials("Лана", "Ниязбек"));

//задание7
function square(x) {
    return x * x;
  }
  
  function cube(x) {
    return x * square(x); 
  }


  console.log(square(3)); 
  console.log(cube(3));   
  console.log(cube(2));
  console.log(cube(5)); 

  //задание8

  const sum = (a, b) => a + b;


  console.log(sum(5, 7)); 
