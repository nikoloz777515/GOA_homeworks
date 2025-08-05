
const clearButton = document.getElementById("btn2");
const taskList = document.getElementById("ul");

clearButton.addEventListener("click", function () {
  const lastTask = taskList.lastElementChild;

  if (lastTask) {
    lastTask.remove();
  } else {
    alert("list is empty");
  }
});


function todo() {
  const input = prompt("Enter a task");

  if (input.trim() !== "") {
    taskList.innerHTML += `<li>task: ${input}</li>`;
  }
}




