export default function loadTodo(project) {
	const center = document.getElementById("center");
	const temp = document.createElement("div");
	temp.innerHTML = "Todo List"
	temp.classList.add('todo-list');
	project.todos.forEach((element) => {
		let tempTodo = document.createElement("div");

		tempTodo.innerHTML = `
			<div class="todo-info">
  			<h2>${element.title}</h2>
			<time>${element.date ? new Date(element.date).toLocaleDateString() : ""}</time>
			</div>
			<button type="button">Delete</button>`
			;
		if (element.priority) {
			tempTodo.classList.add("priority");
		}
		tempTodo.classList.add("todo");
		tempTodo.dataset.id = element.id;
		temp.append(tempTodo);
	});
	center.append(temp);
	return temp;
}

function clearTodo () {
	const center = document.getElementById("center");
	center.innerHTML = ""
}

export {clearTodo}