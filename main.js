// Задача 1.Посчитайте сумму всех элементов числового массива.const numbers = [1, 2, 3, 4, 5];
let even = [];
let odd = [];

let numbers = [1, 0, 25, 30, 100, 7];

for (let number of numbers) // перебирает каждый элемент массива
    {
    if(number % 2 === 0) {
        even.push(number);
    } else {
        odd.push(number);
    }
}

const figures = [1,2,3,4,5];
let sum = 0;

for(let i = 0; i < figures.length; i++) // цикл будет выполняться пока i меньше длины массива
    {
    sum += figures[i];
}
console.log(sum);

// Задача 2.Объедините все строки в массиве строк в одну строку.
const words = ["Hello", " ", "world", "!"];
const combinedString = words.join(""); //метод join соединяет элементы массивв
console.log(combinedString)

// Задача 3.У вас есть массив из числе. Надо сделать так чтоб в массиве все четные числа были умножены на *2 а нечетные на *3Пример: [1, 2, 3, 4] Ожидаемый ответ: [3, 4, 9, 8]
const digits = [1,2,3,4]; 
const modifiedDigits = [];

for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    if (digit % 2 == 0) {
        modifiedDigits.push(digit * 2);
    } else {
        modifiedDigits.push(digit * 3);
    }
}
console.log(modifiedDigits);

// Задача 4.Найти самое минимальное число в массивеПример: [2, 1, 3, 4] Ожидаемый ответ: 1
const primeNumbers = [2, 1, 3, 4];
let minValue = primeNumbers[0];

for (let i = 1; i < primeNumbers.length; i++) {
    const prime = primeNumbers[i];
    if (prime < minValue) {
        minValue = prime;
    }
}
console.log(minValue);

// Задача 5. Найти второе самое минимальное число в массивеПример: [2, 1, 3, 4] Ожидаемый ответ: 2
const allNumbers = [2, 1, 3, 4];
let secondMinNum = allNumbers[0];

for (let i = 1; i < allNumbers.length; i++) {
    const num = allNumbers[i];
    if (num < allNumbers) {
        secondMinNum = num;
    }
}
console.log(secondMinNum);

// Задача 6.Вывести на экран все числа от 1 до 20. Которые делятся на 2, но не делятся на 4. Ожидаемый ответ: 2, 6, 10, 14, 18
const numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let evenNumerals = [0]; // Пустой массив для хранения всех найденных четных чисел.

for (let i = 0; i < numerals.length; i++) {
    const evenNum = numerals[i];
    if (evenNum % 2 === 0 && evenNum % 4 !== 0) {
        evenNumerals.push(evenNum); // Добавляем четное число в массив
    }
}
console.log(evenNumerals);

//homework 1.	Создать массив из 10 чисел. Вывести наибольшее и наименьшее значения массивов.
const ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  инициализируются первым элементом массива
let minNum = ordinalNum[0];
let maxNum = ordinalNum[0];

// Цикл перебирает элементы массива ordinalNum, начиная со второго (т.к. первый уже был использован для инициализации).
for(let i = 1; i < ordinalNum.length; i++) {
    currentNum = ordinalNum[i]; // Получаем текущий элемент массива
    if(currentNum < minNum) {
        minNum = currentNum;
    } else if(currentNum > maxNum) {
        maxNum = currentNum;
    }
}
console.log("Наименьшее число:", minNum);
console.log("Наибольшее число:", maxNum);

// 2. Создать 2 массива из 7 чисел. Сравнить значения в массиве по очереди и выводить информацию в консоль (сравнение производить по индексам, 0 с 0 в обоих массивах и т.д.). 
const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = [7, 6, 5, 4, 3, 2, 1,];

for(let i = 0; i < array1.length; i++) {
    const num1 = array1[i];
    const num2 = array2[i];


  // Сравниваем значения элементов
    if(num1 === num2) {
        console.log(`Элементы на позиции ${i} совпадают: ${num1} = ${num2}`)
    } else {
        console.log(`Элементы на позиции ${i} не совпадают: ${num1} != ${num2}`);
    }
}

//  Создать массив из 10 чисел. Сохранить во второй массив только те значения первого массива, которые являются четными.
const firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const twoArray = [0];

for(let i = 0; i < firstArray.length; i++) {
    const secondArray = firstArray[i];

    if(secondArray % 2 === 0) {
        twoArray.push(secondArray);
    }
}
console.log(twoArray);