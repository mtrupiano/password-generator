
$(function() {

    $('.alert').alert();

    $('.alert').on('close.bs.alert', function (e) {
        e.preventDefault();
        $(this).hide();
    });

    $('#generate-btn').click(function() {

        console.clear();

        var numChars = $('#pw-size-value').val();

        
        var charTypes = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "abcdefghijklmnopqrstuvwxyz",
        "01234567890123456789",    // Repeating the digits increases chances for a
        // number to appear in the resulting password
        " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
        
        var includedChars =    [$('#include-upper').is(':checked'),
                                $('#include-lower').is(':checked'),
                                $('#include-numeric').is(':checked'),
                                $('#include-special').is(':checked')]
        
        if (numChars > 128 || numChars < 8) {
            // show error near size entry field
            $('#size-alert').show();
            if (!includedChars.includes(true)) {
                $('#char-alert').show();
            }
            return;
        } else if (!includedChars.includes(true)) {
            $('#char-alert').show();
            return;
        }
        else {
            $('#char-alert').hide();
            $('#size-alert').hide();
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
