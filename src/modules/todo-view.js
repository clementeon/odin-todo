export default function loadTodo(project) {
	const center = document.getElementById("center");
	const temp = document.createElement("div");
	temp.innerHTML = `<h1>${project.title} Todo List </h1>
	<button id="new-todo" type="button"> New Todo</button>`;
	temp.classList.add("todo-list");
	project.todos.forEach((element) => {
		let tempTodo = document.createElement("div");

		tempTodo.innerHTML = `
  			<h2>${element.title}</h2>
			<time>${element.date ? new Date(element.date).toLocaleDateString() : ""}</time>
		`;
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

function clearTodo() {
	const center = document.getElementById("center");
	center.innerHTML = "";
}
function displayUpdateTodo(todo, form) {
	const todoElement = document.querySelector(
		`[data-id="${todo.dataset.id}"]`,
	);

	if (todoElement) {
		const date = form.get("date");
		const title = form.get("title");

		todoElement.firstElementChild.textContent = title;

		todoElement.firstElementChild.nextElementSibling.innerHTML = `
			<time>${date ? new Date(date).toLocaleDateString() : ""}</time>
		`;
	}
}


function displayAddTodo(todo, todoList) {
	let tempTodo = document.createElement("div");

	tempTodo.innerHTML = `
  			<h2>${todo.title}</h2>
			<time>${todo.date ? new Date(todo.date).toLocaleDateString() : ""}</time>
		`;
	if (todo.priority) {
		tempTodo.classList.add("priority");
	}
	tempTodo.classList.add("todo");
	tempTodo.dataset.id = todo.id;
	todoList.append(tempTodo);
}

function displayRemoveTodo(todo, todoList) {
	const tempTodo = document.querySelector(
		`[data-id="${todo.dataset.id}"]`,
	);
	console.log("start drt")
	console.log(tempTodo)
	console.log(todo)
	console.log(todoList)
	if (tempTodo) {
		tempTodo.remove();
	}
}
export { clearTodo, displayUpdateTodo, displayAddTodo, displayRemoveTodo };
