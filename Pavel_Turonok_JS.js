// 1. Составить алгоритм: если введенное число больше 7, то вывести “Привет”
function Hello (request){
  if (request > 7){
    console.log ("Привет");
  }
  else {
    console.log ("Wrong number");
  }
}
let input_1 = prompt("Введите число:", "");
Hello (input_1);

// 2. Составить алгоритм: если введенное имя совпадает с Вячеслав, то вывести “Привет, Вячеслав”, если нет, то вывести "Нет такого имени"

function Name (req_name){
  if (req_name.toLoverCase() === "вячеслав"){
    console.log ("Привет, Вячеслав");
  } else {
    console.log ("Нет такого имени");
  } 
}
let input_2 = prompt("Введите имя:", "");
Name (input_2);

// 3. Составить алгоритм: на входе есть числовой массив, необходимо вывести элементы массива кратные 3

function Three_divide(...mass){
  let result= [];
  for (let i = 0; i < mass.length; i += 1 ){
      if (mass[i] % 3 === 0){
        result.push(mass[i]);
      }
  }
  if (result.length > 0){
      console.log (result);
  } 
}

let input_3 = prompt("Введите числа через запятую:", "" );
let nums = input_3.split(',').map(Number);
Three_divide(...nums);
