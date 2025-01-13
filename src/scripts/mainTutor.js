document.getElementById("submitBtn").addEventListener("click", function () {
  const faculty = document.getElementById("faculty").value;

  // Fakultät im localStorage speichern, wenn eine Fakultät ausgewählt wurde
  if (faculty !== "") {
    localStorage.setItem("selectedFaculty", faculty);

    // Weiterleitung zur Assignment-Seite
    window.location.href = "../Tutor/assignmentTutor.html";
  } else {
    console.log("Fehlermeldung wird gesetzt");
    document.getElementById("notSelectedCourse").innerText =
      "⚠️ Bitte wählen Sie einen Kurs.";
  }
});
