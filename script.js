function celsiusToFahrenheit(celsius){
    return (celsius * (9/5)) + 32;
}

function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32 ) * 5/9;
}

function formatTemperature(value, unit){
    return value + " " + unit;
}


const f = celsiusToFahrenheit(0);

console.log(formatTemperature(f,"F"));


const c = fahrenheitToCelsius(32);

console.log(formatTemperature(c, "C"));