export default function loadProject(projectManager) {
	const leftBar = document.getElementById("left-bar");

	const projectList = document.getElementById("project-list");

	projectManager.projects.forEach((element) => {
		displayNewProject(element, projectList);
	});

	leftBar.append(projectList);
	return projectList;
}

export function displayNewProject(project, container) {
	const projectDiv = document.createElement("div");
	projectDiv.classList.add("project");

	projectDiv.innerHTML = `
		<div class="project-details">
            <h2>${project.title}</h2>
            <p>${project.todos.length} Todos</p>
			</div>
			<button class="delete-project">x</button>
        `;
	projectDiv.dataset.id = project.id;

	container.append(projectDiv);
}

export function displayUpdateProject(project, newTitle) {
	const projectEdit = document.querySelector(
		`[data-id="${project.id}"]`,
	);
	projectEdit.firstElementChild.firstElementChild.innerHTML = `${newTitle}`;
}

export function displayRemoveProject(project) {
	const projectDelete = document.querySelector(
		`[data-id="${project.id}"]`,
	);	
	console.log("teste")
	console.log(project.id);
	console.log(projectDelete)

    if (projectDelete) {
        projectDelete.remove();
    }
	
}
