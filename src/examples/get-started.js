import { observable } from "mobx"

class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}