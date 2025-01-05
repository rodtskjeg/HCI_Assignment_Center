document.getElementById("submitBtn").addEventListener("click", function () {
  const faculty = document.getElementById("faculty").value;

  if (faculty === "") {
  } else {
    // Fakultät im localStorage speichern
    localStorage.setItem("selectedFaculty", faculty);

    // Weiterleitung zur Assignment-Seite
    window.location.href = `../pages/assignment.html`;
  }
});
