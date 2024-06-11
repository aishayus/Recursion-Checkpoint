//Leap year

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

let year = 2024;
console.log(`${year} is a leap year: ${isLeapYear(year)}`);


//Weather Clothing Adviser

function clothingAdvice(temperature, isRaining) {
    let advice;
    
    if (temperature < 0) {
        advice = "Wear a heavy coat, gloves, and a hat.";
    } else if (temperature >= 0 && temperature < 10) {
        advice = "Wear a coat and a hat.";
    } else if (temperature >= 10 && temperature < 20) {
        advice = "Wear a jacket or sweater.";
    } else if (temperature >= 20 && temperature < 30) {
        advice = "Wear light clothing.";
    } else {
        advice = "Wear shorts and a t-shirt.";
    }
    
    if (isRaining) {
        advice += " Don't forget an umbrella.";
    }
    
    return advice;
}

let temperature = 18;
let isRaining = true;
console.log(clothingAdvice(temperature, isRaining));


//Fibonacci Sequence

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = 10;
console.log(`The ${n}th Fibonacci number is ${fibonacci(n)}`);


//Power Function

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    return base * power(base, exponent - 1);
}

let base = 2;
let exponent = 8;
console.log(`${base} raised to the power of ${exponent} is ${power(base, exponent)}`);
