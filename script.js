document.addEventListener('DOMContentLoaded', function () {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    });

    // Language Selector
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', function () {
        const selectedLanguage = languageSelect.value;
        alert(`Language changed to: ${selectedLanguage}`);
    });

    // Page Navigation with book opening animation
    function openSignUp() {
        const loginPage = document.getElementById('loginPage');
        const signUpPage = document.getElementById('signUpPage');
        loginPage.classList.remove('active');
        signUpPage.classList.add('active');
    }
    function openLogin() {
        const signUpPage = document.getElementById('signUpPage');
        const loginPage = document.getElementById('loginPage');
        signUpPage.classList.remove('active');
        loginPage.classList.add('active');
    }
    document.querySelector('.link[onclick="openSignUp()"]').addEventListener('click', openSignUp);
    document.querySelector('.link[onclick="openLogin()"]').addEventListener('click', openLogin);

    // Background slideshow
    let currentIndex = 0;
    const backgroundImages = document.querySelectorAll('.background-image');
    function showNextImage() {
        backgroundImages[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        backgroundImages[currentIndex].style.opacity = 1;
    }
    setInterval(showNextImage, 5000); // Change image every 5 seconds

    // Form Submission
    document.getElementById('loginButton').addEventListener('click', function () {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        alert(`Login with Email: ${email}, Password: ${password}`);
    });

    document.getElementById('signUpButton').addEventListener('click', function () {
        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('signUpConfirmPassword').value;
        const role = document.getElementById('userRole').value;
        if (password === confirmPassword) {
            alert(`Sign Up with Email: ${email}, Role: ${role}`);
        } else {
            alert('Passwords do not match!');
        }
    });

    document.getElementById('sendRecoveryButton').addEventListener('click', function () {
        const email = document.getElementById('recoveryEmail').value;
        alert(`Recovery email sent to: ${email}`);
    });

    // Password Strength Checker
    const passwordInput = document.getElementById('signUpPassword');
    const passwordStrength = document.getElementById('passwordStrength');
    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        if (password.length < 6) {
            passwordStrength.className = 'password-strength weak';
        } else if (password.length < 10) {
            passwordStrength.className = 'password-strength medium';
        } else {
            passwordStrength.className = 'password-strength strong';
        }
    });
});
