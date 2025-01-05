// Fakultät aus localStorage auslesen
const selectedFaculty = localStorage.getItem("selectedFaculty");

// Map für die Übersetzung der Fakultäten
const facultyNameMap = {
  engineering: "Ingenieurwissenschaften",
  business: "Wirtschaftswissenschaften",
  law: "Rechtswissenschaften",
  medicine: "Medizin",
  arts: "Geisteswissenschaften",
};

// Fakultätsnamen übersetzen und anzeigen
const facultyDisplay = selectedFaculty
  ? facultyNameMap[selectedFaculty] || "Keine Fakultät ausgewählt"
  : "Keine Fakultät ausgewählt";

// Fakultät im HTML anzeigen
document.getElementById("facultyName").innerText =
  "Fakultät: " + facultyDisplay;

// Fakultät auch im Header-Titel anzeigen
const headerTitle = document.getElementById("headerTitle");
headerTitle.textContent += selectedFaculty ? ` - ${facultyDisplay}` : "";

// Dateiname anzeigen, wenn eine Datei hochgeladen wird
const fileUpload = document.getElementById("fileUpload");
fileUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    // Zeigt den Namen der ausgewählten Datei an
    document.getElementById("fileNameDisplay").innerText =
      "Ausgewählte Datei: " + file.name;
  } else {
    // Wenn keine Datei ausgewählt wurde, wird das Textfeld zurückgesetzt
    document.getElementById("fileNameDisplay").innerText = "";
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
