import ProjectManager from "./project-manager.js";
import { loadForm, clearForm } from "./form.js";
import loadProject, {
	displayNewProject,
	displayUpdateProject,
	displayRemoveProject,
} from "./project-view.js";
import loadTodo, {
	clearTodo,
	displayUpdateTodo,
	displayAddTodo,
	displayRemoveTodo,
} from "./todo-view.js";
import { generateDefaultData } from "./load-default.js";
import { loadProjectForm, clearProjectForm } from "./project-form.js";

export default function startApp() {
	const pm = new ProjectManager();
	generateDefaultData(pm);
	const projects = loadProject(pm);
	projectSelect(projects, pm);
	newProject(projects, pm);
}

function projectSelect(projectList, pm) {
	projectList.addEventListener("click", (event) => {
		const project = event.target.closest(".project");
		if (!project) {
			return;
		}
		clearTodo();
		clearForm();
		clearProjectForm();
		const temp = pm.findProject(project.dataset.id);
		pm.currentProject = temp;
		const todoList = loadTodo(pm.currentProject);
		todoSelect(todoList, pm.currentProject);
		loadProjectForm(pm.currentProject);

		newTodo(todoList, pm.currentProject);
		submitProject(projectList, pm, temp);
		deleteProject(temp, pm);
	});
}

function newProject(projectList, pm) {
	const newProject = document.getElementById("new-project");
	newProject.addEventListener("click", () => {
		clearProjectForm();
		loadProjectForm();
		submitProject(projectList, pm, null);
	});
}

function submitProject(projectList, pm, project) {
	const form = document.getElementById("project-submit");
	form.addEventListener("click", (event) => {
		event.preventDefault();
		const newValue = document.getElementById("project-title").value;

		if (project) {
			project.title = newValue;
			displayUpdateProject(project, newValue);
		} else {
			const newProject = pm.createProject(newValue);
			if (newProject) {
				displayNewProject(newProject, projectList);
			}
		}
	});
}

function deleteProject(project, pm) {
	const deleteProject = document.getElementById("project-delete");
	deleteProject.addEventListener("click", (event) => {
		event.preventDefault();
		if (project) {
			displayRemoveProject(project);
			pm.removeProject(project);
			pm.currentProject = "";
			clearTodo();
			clearProjectForm();
		}
		console.log(pm);
	});
}

function todoSelect(todoList, project) {
	todoList.addEventListener("click", (event) => {
		const todo = event.target.closest(".todo");
		if (!todo) {
			return;
		}
		clearForm();
		clearProjectForm();
		project.currentTodo = project.findTodo(todo.dataset.id);
		loadForm(project.currentTodo);
		// todoEdit(todo, project, form);
		submitTodo(null, project, todo);
		deleteTodo(todo, project, todoList)
	});
}

// function todoEdit(todo, project, form) {
// 	const submitTodo = document.getElementById("todo-submit");
// 	const todoID = todo.dataset.id;
// 	if (!submitTodo) {
// 		return;
// 	}
// 	submitTodo.addEventListener("click", (event) => {
// 		event.preventDefault();
// 		displayUpdateTodo(todoID, form);
// 		project.editTodo(todoID, form);
// 		console.log(project);
// 	});
// }

function newTodo(todoList, project) {
	const newTodo = document.getElementById("new-todo");
	if (!newTodo) {
		return;
	}
	newTodo.addEventListener("click", () => {
		clearForm();
		clearProjectForm();
		loadForm();
		submitTodo(todoList, project, null);
	});
}

function submitTodo(todoList, project, todo) {
	const form = document.getElementById("todo-form");

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const formData = new FormData(form);

		console.log(formData.get("title"));
		console.log(formData.get("notes"));
		console.log(formData.get("date"));

		if (todo) {
			console.log("today we got a");
			console.log(todo.dataset.id);
			project.editTodo(todo.dataset.id, form);
			console.log(project);
			displayUpdateTodo(todo, formData);
		} else {
			const todoData = {
				title: formData.get("title"),
				note: formData.get("notes"),
				date: formData.get("date"),
				priority: formData.has("priority"),
			};
			console.log(project);
			const temp = project.createTodo(todoData);
			console.log(todoList);
			if (temp) {
				displayAddTodo(temp, todoList);
			}
		}
	});
}

function deleteTodo(todo, project, todoList) {
	const deleteButton = document.getElementById('todo-delete');
	deleteButton.addEventListener('click', ()=> {
		if (todo) {
			displayRemoveTodo(todo, todoList);
			project.removeTodo(todo.id);
			clearForm();
		}
		console.log(project)
	})
}