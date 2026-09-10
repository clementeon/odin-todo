export default function loadTodo(project) {
	const center = document.getElementById("center");
	const temp = document.createElement("div");
	temp.innerHTML = `<h1>${project.title} Todo List </h1>
	<button id="new-todo" type="button"> New Todo</button>`
	temp.classList.add('todo-list');
	project.todos.forEach((element) => {
		let tempTodo = document.createElement("div");

		tempTodo.innerHTML = `
  			<h2>${element.title}</h2>
			<time>${element.date ? new Date(element.date).toLocaleDateString() : ""}</time>
		`
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

function displayUpdateTodo(todoId, form) {
	const todoElement = document.querySelector(`[data-id="${todoId}"]`);
	console.log("THIS IS RUN IN DUT")
	console.log(todoElement)
	if (todoElement) {
		const title = form.querySelector("#todo-title").value;
		const date = form.querySelector("#date").value;
		console.log(`title is ${title}, date is ${date}`)
		todoElement.firstElementChild.textContent = title;
		todoElement.firstElementChild.nextElementSibling.textContent = date;
	}
}


export {clearTodo, displayUpdateTodo}