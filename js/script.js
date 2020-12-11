
$(function() {

    // Initialize bootstrap's alerts
    $('.alert').alert();

    // Override bootstrap's default alert close behavior
    $('.alert').on('close.bs.alert', function (e) {
        e.preventDefault();
        $(this).hide();
    });

    // Main password generation logic
    $('#generate-btn').click(function() {

        var numChars = $('#pw-size-value').val();
        
        // Collect character type groups in array
        var charTypes = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                         "abcdefghijklmnopqrstuvwxyz",
                         "01234567890123456789",    // Repeating the digits increases chances for a
                                                    // number to appear in the resulting password
                         " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
        
        // Boolean array stores character type checkbox selections
        var includedChars =    [$('#include-upper').is(':checked'),
                                $('#include-lower').is(':checked'),
                                $('#include-numeric').is(':checked'),
                                $('#include-special').is(':checked')]
        
        // Validate inputs
        if (numChars > 128 || numChars < 8) {

            $('#size-alert').show();
            if (!includedChars.includes(true)) {
                $('#char-alert').show();
            }
            return;

        } else if (!includedChars.includes(true)) {

            $('#char-alert').show();
            return;

        } else {
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
