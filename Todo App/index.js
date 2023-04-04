//1- Add the task
//2- Select the priority
//3- on click of submit it must show it into todo list

// JavaScript code for adding tasks to the table
function addTask() {
  // Get the input values
  const taskInput = document.getElementById("task");
  const prioritySelect = document.getElementById("priority");

  const task = taskInput.value;
  console.log(task);
  const priority = prioritySelect.value;
  console.log(priority);

  // Create a new table row with the task, priority, and delete button
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <td>${task}</td>
  <td>${priority}</td>
  <td><button type="button" onclick="deleteTask(this)">Delete</button></td>
`;

  // Append the new row to the table body
  const tableBody = document.querySelector("tbody");
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
  const tableBody = document.querySelector("tbody");
  tableBody.removeChild(row);
}
