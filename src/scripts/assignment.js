// Fakultät aus localStorage auslesen
const selectedFaculty = localStorage.getItem("selectedFaculty");

// Map für die Übersetzung der Fakultäten
const facultyNameMap = {
  hci: "HCI",
  gbs: "GBS",
  mathe_2: "Mathe II",
  prog_2: "Programmieren II",
  data: "Datenstrukturen",
};

// Fakultätsnamen übersetzen und anzeigen
const facultyDisplay = selectedFaculty
  ? facultyNameMap[selectedFaculty] || "Kein Kurs ausgewählt"
  : "Kein Kurs ausgewählt";

// Fakultät im HTML anzeigen
document.getElementById("facultyName").innerText = "Kurs: " + facultyDisplay;

// Fakultät auch im Header-Titel anzeigen
const headerTitle = document.getElementById("headerTitle");
headerTitle.textContent += selectedFaculty ? ` - ${facultyDisplay}` : "";

// Dateiname anzeigen, wenn eine Datei hochgeladen wird
const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", function () {
  const file = this.files[0];
  const fileNameDisplay = document.getElementById("fileNameDisplay");

  if (file) {
    fileNameDisplay.innerText = "Ausgewählte Datei: " + file.name;
  } else {
    fileNameDisplay.innerText = "";
  }
});

// Formular-Submit: Neue Zeile zur Tabelle hinzufügen
document
  .getElementById("assignmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Eingabewerte sammeln
    const projectName = document.getElementById("projectName").value;
    const studentName = document.getElementById("studentName").value;
    const timeSpent = document.getElementById("timeSpent").value;
    const status = document.getElementById("status").value;
    const fileName = fileUpload.files[0]
      ? fileUpload.files[0].name
      : "Keine Datei";

    // Neue Zeile für die Tabelle erstellen
    const table = document
      .getElementById("assignmentTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    // Zellen für die verschiedenen Spalten der neuen Zeile hinzufügen
    newRow.insertCell(0).innerText = projectName;
    newRow.insertCell(1).innerText = studentName;
    newRow.insertCell(2).innerText = timeSpent + " Stunden";

    // Status-Zelle mit farblichem Label hinzufügen
    const statusCell = newRow.insertCell(3);
    statusCell.innerHTML = `<span class="status-label ${status
      .toLowerCase()
      .replace(" ", "-")}">${status}</span>`;

    // Dateiname und Punkte-Feld
    newRow.insertCell(4).innerText = fileName;
    newRow.insertCell(5).innerText = "--"; // Punkte-Feld bleibt leer

    // Formular zurücksetzen nach dem Hinzufügen der neuen Zeile
    document.getElementById("assignmentForm").reset();
    document.getElementById("fileNameDisplay").innerText = "";
  });

// Beispiel: Diese Funktion aufrufen, wenn du neue Daten hinzufügst oder abrufst
function updateStudentPointsDisplay(studentName, points) {
  const studentPointsDisplay = document.getElementById("studentPointsDisplay");
  studentPointsDisplay.innerText = `${studentName} hat insgesamt ${points} Punkte.`;
}

// Rauminfo anzeigen oder ausblenden
document
  .getElementById("showRoomInfoBtn")
  .addEventListener("click", function () {
    const roomInfo = document.getElementById("roomInfo");
    roomInfo.style.display =
      roomInfo.style.display === "none" ? "block" : "none";
  });
