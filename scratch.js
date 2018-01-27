var todoList = [];

function rememberTo(Task) {

  todoList.push(task);

}

function whatIsNext() {
  return todoList.shift();
}

function urgentlyRememberTo(Task) {
  todoList.unshift(task);
}
