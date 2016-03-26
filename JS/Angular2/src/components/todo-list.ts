import {Component} from "angular2/core";
import {TodoService} from "./../services/todo-service"
import {TodoItem} from "./todo-item"
import {SearchPipe} from "./../filters/search"
import {StartedPipe} from "./../filters/started"

@Component({
    selector: "todo-list",
    pipes: [SearchPipe, StartedPipe],
    directives: [TodoItem],
    template: `<div>
<ul>
<li *ngFor="#todo of todoService.todos | search | started">
    <todo-item
[todo]="todo"
(toggle)="todoService.toggleTodo($event)"
></todo-item>
</li>
</ul>
</div>`
})
export class TodoList {
    constructor(public todoService: TodoService) {

    }

};
