var pw = "";

var numChars = 0;

// Prompt user to enter password length (between 8 and 128 inclusive)
while (numChars < 8 || numChars > 128) {
    numChars = prompt("Enter number of characters in your password (min 8, max 128)");
}

var charTypes = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                 "abcdefghijklmnopqrstuvwxyz",
                 "0123456789",
                 " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

var includedChars = [false, // Include upper-case letters?
                     false, // Include lower-case letters?
                     false, // Include numeric characters?
                     false] // Include special characters?

// Prompt user to select character types (user must select at least 1 character type)                     
while (!includedChars.includes(true)) {

    includedChars[0] = confirm("Include upper-case letters?");
    includedChars[1] = confirm("Include lower-case letters?");
    includedChars[2] = confirm("Include numeric characters?");
    includedChars[3] = confirm("Include special characters?");

    if (!includedChars.includes(true)) {
        alert("You must select at least one character type.");
    }
}

var charSpace = "";

// Populate charSpace with all selected character types
for (var i = 0; i < 4; i++) {
    if (includedChars[i]) {
        charSpace += charTypes[i];
    }
}

console.log(charSpace);

// Randomly select characters from charSpace to build password
for (var i = 0; i < numChars; i++) {
    pw += charSpace[Math.floor(Math.random() * charSpace.length)];
}

console.log(`The generated password (${numChars} long): ${pw}`);