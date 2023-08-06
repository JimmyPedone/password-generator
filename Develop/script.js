// Assignment Code that generates the button
var generateBtn = document.querySelector("#generate");

//Declaring variables for user input
var enter;
var useUppercase;
var useLowercase;
var useCharacter;
var useNumber;
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// Transformation method "map" allows for upper-case conversion
alpha2 = alpha.map(toUpper);

// ---------------------------------------------------------------------------------------------------------------------------------

// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Special characters
character = ["*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "!", "#", "$", "%", " ^ ", "&", "'", "@", "[", "\\", "]",  "_", "`", "{", "|", "}", "~"];

// Space is for the Uppercase conversion
space = [];

// ---------------------------------------------------------------------------------------------------------------------------------

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

// Prompts user input
enter = parseInt(prompt("Please add the amount of characters you would like to have for your password (Choose between 8 and 128 characters)"));
// First if statement for user validation 
if (!enter) {
    alert("This needs a value");
} else if (enter < 8 || enter > 128) {

// Start user input prompts
enter = parseInt(prompt("You must choose between 8 and 128"));

} else {
// "else" allows user to continues once input is validated
useUppercase = confirm("Will this password have Uppercase letters?");
useLowercase = confirm("Will this password have Lowercase letters?");
useNumber = confirm("Will this password have numbers?");
useCharacter = confirm("Will this password have special characters?");
};
  passwordText.value = password;

}
// Else if for 4 negative options
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");
  //   generatePassword() - This loops it, but makes it impossible to refresh the page

}
// First if statement that uses user input prompts to determine choices

// "Else if's" for 4 positive choices
else if (useUppercase && useLowercase && useNumber && useCharacter) {
  choices = character.concat(number, alpha, alpha2);
}
// "Else if's" for 3 positive choices
else if (useUppercase && useLowercase && useNumber && useCharacter) {
  choices = character.concat(number, alpha2);
}
else if (useUppercase && useLowercase && useNumber && useCharacter) {
  choices = character.concat(number, alpha);
}
else if (useUppercase && useLowercase && useNumber && useCharacter) {
  choices = character.concat(alpha, alpha2);
}
else if (useUppercase && useLowercase && useNumber && useCharacter) {
  choices = number.concat(alpha, alpha2);
}
// "Else if's" for 2 positive choices 
else if (confirmCharacter && confirmNumber) {
choices = character.concat(number);
}
else if (confirmCharacter && confirmLowercase) {
choices = character.concat(alpha);
} 
else if (confirmCharacter && confirmUppercase) {
choices = character.concat(alpha2);
}
else if (confirmLowercase && confirmNumber) {
choices = alpha.concat(number);
} 
else if (confirmLowercase && confirmUppercase) {
choices = alpha.concat(alpha2);
} 
else if (confirmNumber && confirmUppercase) {
choices = number.concat(alpha2);
}

// Else if for 1 positive option
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = alpha;
}
// Uppercase conversion
else if (confirmUppercase) {
  choices = space.concat(alpha2);
};
// Array placeholder for user generated amount of length
var password = [];

// --------------------------------------------------------------------------------------------------------------------------------------

// Random selection for all variables
// for loop begins process to generate a random selection through variables
// math.floor/math.random code randomizes choices prompted to the user
for (var i = 0; i < enter; i++) {
    var chooseChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(chooseChoicesChoices);
}

// Joins password array and converts it to a string
var passJoin = password.join("");
UserInput(passJoin);
return passJoin;

// Puts the password value into the textbox
function UserInput(passJoin) {
document.getElementById("password").textContent = passJoin;
}

// Source: https://youtu.be/9sT03jEwcaw
function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Copied to clipboard!");
}

// ------------------------------------------------------------------------------------------------------------------------------------

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
