document.getElementById("submitBtn").addEventListener("click", function () {
  const faculty = document.getElementById("faculty").value;

  // Fakultät im localStorage speichern, wenn eine Fakultät ausgewählt wurde
  if (faculty !== "") {
    localStorage.setItem("selectedFaculty", faculty);

    // Weiterleitung zur Assignment-Seite
    window.location.href = "../pages/assignment.html";
  }

});
