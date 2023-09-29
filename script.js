// Oppgave 1://

const checkOddOrEven = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};
  
console.log(checkOddOrEven(5));
console.log(checkOddOrEven(10));

// Oppgave 2://

const userMale = true;
const userTitle = userMale ? "Mr." : "Mrs.";

console.log(userTitle);

// Oppgave 3://

function greet(name, hour) {
  if (hour >= 0 && hour < 6) {
    return `Good night ${name}`;
  } 
  else if (hour >= 6 && hour < 12) {
    return `Good morning ${name}`;
  } 
  else if (hour >= 12 && hour < 18) {
    return `Good day ${name}`;
  } 
  else if (hour >= 18 && hour < 24) {
    return `Good evening ${name}`;
  } 
  else {
    return "Invalid time";
  }
}

console.log(greet("Christer", 20));
console.log(greet("Artur", 9));
console.log(greet("Magnus", 23));
console.log(greet("Audun", 12));
console.log(greet("Mari", 23));
console.log(greet("Desiree", 21));

// Oppgave 4://

const divideLargestBySmaller = (num1, num2) => {
  const largest = num1 > num2 ? num1 : num2;
  const smaller = num1 < num2 ? num1 : num2;

return largest / smaller;
};

const result = divideLargestBySmaller(13, 24);
console.log(result);

// Oppgave 5://

let username = "";
let userAge = 27;
let userIsBlocked = false;
let userIsLoggedIn = false;

if (username !== "" && userAge >= 18 && !userIsBlocked) {
  userIsLoggedIn = true;
  console.log("You are logged in");
} 
else {
  console.log("Unable to log in");
}