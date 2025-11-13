document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from refreshing page

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let errorMsg = document.getElementById("errorMsg");

  // Basic validation
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    errorMsg.textContent = "⚠️ Please fill all fields!";
    return;
  }

  // Email validation regex
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "⚠️ Enter a valid email address!";
    return;
  }

  // Password length
  if (password.length < 6) {
    errorMsg.textContent = "⚠️ Password must be at least 6 characters!";
    return;
  }

  // Confirm password
  if (password !== confirmPassword) {
    errorMsg.textContent = "⚠️ Passwords do not match!";
    return;
  }

  // Success — redirect
  errorMsg.textContent = "";
  alert("Registration Successful!");
  window.location.href = "dashboard.html";
});
