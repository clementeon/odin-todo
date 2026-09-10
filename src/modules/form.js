function loadForm(todo = {}) {
	const bar = document.getElementById("right-bar");

	const form = document.createElement("form");

	form.id = "todo-form";
	form.method = "post";
	form.innerHTML = `
			<input type="text" name="title" id="todo-title">
			<br>
			<label for="notes">Notes</label>
			<br>
			<input type="text" name="notes" id="notes">
			<br>
			<label for="date">Due Date</label>
			<br>
			<input type="datetime-local" name="date" id="date">
			<br>
			<label for="priority">Priorty</label>
			<input type="checkbox" name="priority" id="priority">
			<div class="buttons">
			<div class="form-button">
			<button type="button" id="todo-cancel">Cancel</button>
			<button type="submit" id="todo-submit">Submit</button>
			</div>
			<button type="button" id="todo-delete">Delete</button>
			</div>`;

	if (todo) {
	form.querySelector("#todo-title").value = todo.title ?? "";
	form.querySelector("#notes").value = todo.notes ?? "";
	form.querySelector("#priority").checked = todo.priority ?? false;
	form.querySelector("#date").value = todo.date ?? "";
}

	bar.append(form);
	return form;
}

function clearForm() {
	const form = document.getElementById("todo-form");
	if (form) {
		form.remove();
	}
}

export { loadForm, clearForm };
