import Project from "./projects.js";

export default class ProjectManager {
	constructor() {
		this.projects = [];
		this.currentProject = null;
	}

	createProject(title) {
		this.addProject(new Project(title));
	}

	addProject(project) {
		for (let i = 0; i < this.projects.length; i++) {
			if (project.title == this.projects[i].title) {
				return false;
			}
		}
		this.projects.push(project);
	}

	removeProject(project) {
		for (let i = 0; i < this.projects.length; i++) {
			if (project.title == this.projects[i].title) {
				this.projects.splice(i, 1);
			}
		}
	}


}