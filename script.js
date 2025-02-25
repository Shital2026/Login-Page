document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Form को Submit होने से रोकने के लिए
        
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "admin" && password === "12345") {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // किसी और पेज पर Redirect कर सकते हैं
        } else {
            alert("Invalid Username or Password!");
        }
    });
});
