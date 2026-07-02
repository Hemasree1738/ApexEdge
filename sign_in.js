// ---- Password visibility toggle ----
document.getElementById('togglePassword').addEventListener('click', function() {
    var passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        this.textContent = '🙈';
    } else {
        passwordField.type = 'password';
        this.textContent = '👁️';
    }
});

// ---- Form validation ----
document.getElementById('signinForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var isValid = true;

    var email    = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    // Reset errors
    ['email', 'password'].forEach(function(id) {
        document.getElementById(id).classList.remove('input-error');
    });
    ['emailError', 'passwordError'].forEach(function(id) {
        document.getElementById(id).style.display = 'none';
    });

    // Email check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email').classList.add('input-error');
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Password check
    if (password.length < 6) {
        document.getElementById('password').classList.add('input-error');
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    }

    // Success
    if (isValid) {
        document.getElementById('signinForm').reset();
        var successMsg = document.getElementById('successMsg');
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});