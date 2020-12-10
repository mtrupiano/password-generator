
$(function() {

    $('#generate-btn').click(function() {

        console.clear();

        var numChars = $('#pw-size-value').val();

        if (numChars > 128 || numChars < 8) {
            // show error near size entry field
            return;
        }
        

        // Prompt user to enter password length (between 8 and 128 inclusive)
        // while (numChars < 8 || numChars > 128) {
        //     numChars = prompt("Enter number of characters in your password (min 8, max 128)");
        // }

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
        
            includedChars[0] = $('#include-upper').is(':checked'); // confirm("Include upper-case letters?");
            includedChars[1] = $('#include-lower').is(':checked'); // confirm("Include lower-case letters?");
            includedChars[2] = $('#include-numeric').is(':checked'); // confirm("Include numeric characters?");
            includedChars[3] = $('#include-special').is(':checked'); // confirm("Include special characters?");
        
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
        
        console.log(`charSpace: ${charSpace}`);
        
        // Randomly select characters from charSpace to build password
        var pw = "";
        for (var i = 0; i < numChars; i++) {
            pw += charSpace[Math.floor(Math.random() * charSpace.length)];
        }
        
        $("#result").val(pw);

        // Re-size the password result text area if the password is long
        if (!($("#result").prop("scrollHeight") <= 55)) {
            $("#result").css("height", "");
            $("#result").css("height", $("#result").prop("scrollHeight") + 10 + "px");
        }

    });

});
