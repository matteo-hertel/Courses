import {Component} from "angular2/core";
import {TodoService} from "./../services/todo-service"
import {TodoItem} from "./todo-item"
import {SearchPipe} from "./../filters/search"

@Component({
    selector: "todo-list",
    pipes: [SearchPipe],
    directives: [TodoItem],
    template: `<div>
<ul>
<li *ngFor="#todo of todoService.todos | search">
    <todo-item [todo]="todo"></todo-item>
</li>
</ul>
</div>`
})
export class TodoList {
    constructor(public todoService: TodoService) {

    }

};
