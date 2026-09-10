export default class Todo {
	constructor({title, notes, date, priority}) {
		this.title = title;
		this.notes = notes;
		this.date = date;
		this.priority = priority;
		this.id = crypto.randomUUID();
	}
}
