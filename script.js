// Sample data

const students = [

  { roll: 1, name: "Amit", subject: "Math", marks: 85 },

  { roll: 2, name: "Neha", subject: "Science", marks: 90 },

  { roll: 3, name: "Ravi", subject: "English", marks: 78 },

];

const tableBody = document.querySelector("#marksTable tbody");

const addRowBtn = document.getElementById("addRowBtn");

// Function to render table rows

function renderTable() {

  tableBody.innerHTML = "";

  students.forEach(student => {

    const row = `<tr>

                  <td>${student.roll}</td>

                  <td>${student.name}</td>

                  <td>${student.subject}</td>

                  <td>${student.marks}</td>

                </tr>`;

    tableBody.innerHTML += row;

  });

}

// Add new row on button click

addRowBtn.addEventListener("click", () => {

  const newRoll = students.length + 1;

  students.push({ roll: newRoll, name: "New Student", subject: "Math", marks: 70 });

  renderTable();

});

// Initial render

renderTable();