document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Demo credentials
  if (username === "admin" && password === "admin") {
    sessionStorage.setItem("gastech_auth", "true");

    // Redirect to dashboard
    window.location.href = "addContacts.html";
  } else {
    alert("Invalid credentials. Please use demo credentials.");
  }
});
