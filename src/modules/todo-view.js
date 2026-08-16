export default function loadTodo(project) {
	const center = document.getElementById("center");
	let temp = document.createElement("div");
	project.todos.forEach((element) => {
		let tempTodo = document.createElement("div");

		tempTodo.innerHTML = `
  			<h2>${element.title}</h2>
  			<time>${new Date(element.date).toLocaleDateString()}</time>
			`;
		if (element.priority) {
			tempTodo.classList.add("priority");
		}
		temp.classList.add('todo');
		temp.append(tempTodo);
	});
	center.append(temp);
}
