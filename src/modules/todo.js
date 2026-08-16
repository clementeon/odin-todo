export default class Todo {
	constructor(title, note, date, priortiy) {
		this.title = title;
		this.note = note;
		this.date = date;
		this.priority = priortiy;
		this.id = crypto.randomUUID();
	}
}
