export default function loadProject(projectManager) {
    const leftBar = document.getElementById('left-bar');

    const projectList = document.createElement('div');
    projectList.classList.add('project-list');

    projectManager.projects.forEach(element => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
		<div class="project-details">
            <h2>${element.title}</h2>
            <p>${element.todos.length} Todos</p>
			</div>
			<button id="delete-project">x</button>
        `;
		projectDiv.dataset.id = element.id;

        projectList.append(projectDiv);
    });

    leftBar.append(projectList);
	return projectList;
}