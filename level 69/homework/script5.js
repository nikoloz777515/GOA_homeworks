const task = document.getElementById("ul");
const clearButton = document.getElementById("btn2");


function todo() {
  const input = prompt("Enter a task");
    task.innerHTML += `<li>task: ${input}</li>`;
  
}



clearButton.addEventListener("click", function () {
  const lastTask = task.lastElementChild;

  if (lastTask) {
    lastTask.remove();
  } else {
    alert("list is empty");
  }
});

