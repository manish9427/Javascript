//1- Add the task
//2- Select the priority
//3- on click of submit it must show it into todo list

function addToTask() {
  const taskInput = document.getElementById("task");
  const task = taskInput.value;
  //   console.log(task);

  const prioritySelect = document.getElementById("priority");
  const priority = prioritySelect.value;
  //   console.log(priority);

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${task}</td>
  <td>${priority}</td>
  <td><button type="button" onclick="deleteTask(this)"></button></td>
  `;

  const tableBody = document.getElementById("tablebody");
  tableBody.appendChild(newRow);
  // Clear the input fields
  taskInput.value = "";
  prioritySelect.value = "low";
}

// JavaScript code for deleting tasks from the table
function deleteTask(button) {
  // Get the parent row element of the button
  const row = button.parentNode.parentNode;

  // Remove the row from the table body
  const tableBody = document.getElementById("tablebody");
  tableBody.removeChild(row);
}
