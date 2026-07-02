// ---- Password visibility toggles ----
document.getElementById('togglePassword').addEventListener('click', function() {
    var field = document.getElementById('password');
    field.type = field.type === 'password' ? 'text' : 'password';
    this.textContent = field.type === 'password' ? '👁️' : '🙈';
});

document.getElementById('toggleConfirm').addEventListener('click', function() {
    var field = document.getElementById('confirmPassword');
    field.type = field.type === 'password' ? 'text' : 'password';
    this.textContent = field.type === 'password' ? '👁️' : '🙈';
});

// ---- Form validation ----
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var isValid = true;

    var name            = document.getElementById('fullName').value.trim();
    var email           = document.getElementById('email').value.trim();
    var phone           = document.getElementById('phone').value.trim();
    var password        = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();

    // Reset all errors
    ['fullName', 'email', 'phone', 'password', 'confirmPassword'].forEach(function(id) {
        document.getElementById(id).classList.remove('input-error');
    });
    ['nameError', 'emailError', 'phoneError', 'passwordError', 'confirmError'].forEach(function(id) {
        document.getElementById(id).style.display = 'none';
    });

    // Name check
    if (name.length < 3) {
        document.getElementById('fullName').classList.add('input-error');
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email').classList.add('input-error');
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone check
    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phone').classList.add('input-error');
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Password check
    if (password.length < 6) {
        document.getElementById('password').classList.add('input-error');
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Confirm password check
    if (confirmPassword !== password) {
        document.getElementById('confirmPassword').classList.add('input-error');
        document.getElementById('confirmError').style.display = 'block';
        isValid = false;
    }

    // Success
    if (isValid) {
        document.getElementById('signupForm').reset();
        var successMsg = document.getElementById('successMsg');
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});