document.getElementById("submitBtn").addEventListener("click", function () {
  const faculty = document.getElementById("faculty").value;

  if (faculty === "") {
    alert("Bitte wähle eine Fakultät aus!");
  } else {
    // Weiterleitung zu einer spezifischen Seite basierend auf der Fakultät
    window.location.href = `../pages/assignment.html`;
  }
});
