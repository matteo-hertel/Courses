import {Component, Input} from "angular2/core";
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
Term: {{term | json}}
<li *ngFor="#todo of todoService.todos | search : term | started : status">
    <todo-item
[todo]="todo"
(toggle)="todoService.toggleTodo($event)"
></todo-item>
</li>
</ul>
</div>`
})
export class TodoList {
    @Input() status;
    @Input() term;
    constructor(public todoService: TodoService) {

    }

};
