document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var contact = document.getElementById('contact').value.trim();
    var address = document.getElementById('address').value.trim();
    var city = document.getElementById('city').value.trim();

    if (firstName === '' || lastName === '' || email === '' || contact === '' || address === '' || city === '') {
        alert('Please fill in all the fields.');
    } else {
        document.body.style.backgroundColor = '#D4EDDA';
        alert('Registration Successful');
        document.getElementById('registrationForm').reset();
    }
});
