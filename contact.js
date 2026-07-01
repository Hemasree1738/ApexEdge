document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    var isValid = true;

    var name    = document.getElementById('fullName').value.trim();
    var email   = document.getElementById('email').value.trim();
    var phone   = document.getElementById('phone').value.trim();
    var course  = document.getElementById('course').value;
    var message = document.getElementById('message').value.trim();

    var fields = ['fullName', 'email', 'phone', 'course', 'message'];
    fields.forEach(function(id) {
        document.getElementById(id).classList.remove('input-error');
    });

    var errors = ['nameError', 'emailError', 'phoneError', 'courseError', 'messageError'];
    errors.forEach(function(id) {
        document.getElementById(id).style.display = 'none';
    });

    
    if (name.length < 3) {
        document.getElementById('fullName').classList.add('input-error');
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email').classList.add('input-error');
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phone').classList.add('input-error');
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    
    if (course === '') {
        document.getElementById('course').classList.add('input-error');
        document.getElementById('courseError').style.display = 'block';
        isValid = false;
    }

    
    if (message.length < 10) {
        document.getElementById('message').classList.add('input-error');
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    
    if (isValid) {
        document.getElementById('registerForm').reset();
        var successMsg = document.getElementById('successMsg');
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});