import ProjectManager from "./project-manager.js";
import { loadForm, clearForm } from "./form.js";
import loadProject from "./project-view.js";
import loadTodo, { clearTodo } from "./todo-view.js";
import { generateDefaultData } from "./load-default.js";

export default function startApp() {
	const pm = new ProjectManager();
	generateDefaultData(pm);
	const projects = loadProject(pm);
	projectSelect(projects, pm);
}

function submitNew(project, form) {
	form.addEventListener("submit", (event) => {
		console.log("hi");
		event.preventDefault();
		const tempform = new FormData(form);
		console.log(tempform);
	});
}

function projectSelect(projectList, pm) {
	projectList.addEventListener("click", (event) => {
		clearTodo();
		const project = event.target.closest(".project");
		if(!project) {
			return;
		}
		pm.currentProject = pm.findProject(project.dataset.id)
		const todoList = loadTodo(pm.currentProject);
		console.log(pm.currentProject);
		todoSelect(todoList, pm.currentProject);
	});
}

	function todoSelect(todoList, project){
		todoList.addEventListener('click', (event) => {
			const todo = event.target.closest(".todo");
			if(!todo) {
				return;
			}
			clearForm();

			project.currentTodo = project.findTodo(todo.dataset.id);
			// console.log(project.currentTodo.title)
			loadForm(project.currentTodo);
		})
	}
