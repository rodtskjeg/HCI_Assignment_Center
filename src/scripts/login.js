document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
    } else if (username === "admin" || password === "admin") {
      window.location.href = "../pages/Tutor/tutorMain.html";
    } else {
      window.location.href = "../pages/main.html";
    }
  });
