function loadForm(todo) {
	const bar = document.getElementById("right-bar");

	const form = document.createElement("form");

	form.id = "todo-form";
	form.action = "post";
	form.innerHTML = `
		<label for="title">Title</label>
			<br>
			<input type="text" name="title" id="title">
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
			<button type="submit" id="submit">Submit</button>`;

	bar.append(form);
	return form;
}

export {loadForm};
