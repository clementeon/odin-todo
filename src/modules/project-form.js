function loadProjectForm(project = {}) {
	const bar = document.getElementById("right-bar");

	const form = document.createElement("form");

	form.id = "project-form";
	form.method = "post";
	form.innerHTML = `
			<input type="text" name="title" id="project-title">
			<br>
			<div class="buttons">
			<div class="form-button">
			<button type="button" id="project-cancel">Cancel</button>
			<button type="submit" id="project-submit">Submit</button>
			</div>
			<button type="button" id="project-delete">Delete</button>
			</div>`;

	if (project) {
		form.querySelector("#project-title").value = project.title ?? "";
 	}

	bar.append(form);
	return form;
}

function clearProjectForm() {
	const form = document.getElementById("project-form");
	if (form) {
		form.remove();
	}
}
export { loadProjectForm, clearProjectForm };
