export default function loadProject(projectManager) {
	const leftBar = document.getElementById('left-bar');

	let temp = document.createElement('div');

	projectManager.projects.forEach(element => {
		let tempDiv = document.createElement('div')
		tempDiv.classList.add('project');
		tempDiv.innerHTML = `<h2>${element.title}</h2>
		<p>${element.todos.length} Todos</p>`
		tempDiv.append(temp);
	});

	temp.append(leftBar);

}