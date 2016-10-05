// Add Player button click
$('#btnAddPlayer').on('click', addPlayer);

// Add User
function addPlayer(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addPlayer input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newPlayer = {
            'firstname': $('#addPlayer fieldset input#inputFirstName').val(),
            'lastname': $('#addPlayer fieldset input#inputLastName').val(),
            'age': $('#addPlayer fieldset input#inputAge').val(),
            'description': $('#addPlayer fieldset input#inputDescription').val(),
            'image': $('#addPlayer fieldset input#inputImage').val()
        };

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newPlayer,
            url: '/addNewPlayer',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '' && response.status === 200) {
                alert("Player Added Successfully!!!");
                // Clear the form inputs
                $('#addPlayer fieldset input').val('');

                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};
