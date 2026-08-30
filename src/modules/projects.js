import Todo from "./todo.js";

export default class Project {
	constructor(title) {
		this.title = title;
		this.todos = [];
		this.prioritySort = false;
		this.currentTodo = null;
		this.isProtected = false;
		this.id = crypto.randomUUID();
	}

	createTodo({ title, note, date, priority }) {
		this.addTodo(new Todo({ title, note, date, priority }));
	}

	addTodo(todo) {
		this.todos.push(todo);
	}

	editTodo(id, form) {
		for (let i = 0; i < this.todos.length; i++) {
			if (this.todos[i].id == id) {
				this.todos[i].title = form.elements.title.value;
				this.todos[i].note = form.elements.notes.value;
				this.todos[i].date = form.elements.date.date;
				this.todos[i].priority = form.elements.priority.checked;
				return;
			}
		}
	}

	removeTodo(id) {
		for (let i = 0; i < this.todos.length; i++) {
			if (this.todos[i].id == id) {
				let temp = this.todos[i];
				this.todos.splice(i, 1);
				return temp;
			}
		}
	}


	findTodo(id) {
		for (let i = 0; i < this.todos.length; i++) {
			if (this.todos[i].id == id) {
				return this.todos[i];
			}
		}
	}

	sortDate() {
		this.todos = this.todos.sort((a, b) => a.date - b.date);
		this.prioritySort = false;
	}

	sortPriority() {
		const temp = this.todos.filter((project) => project.priority);
		this.todos = this.todos.filter((project) => !project.priority);
		this.todos = [...temp, ...this.todos];
		this.prioritySort = true;
	}
}
