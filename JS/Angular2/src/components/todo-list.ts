import {Component} from "angular2/core";
import {TodoService} from "./../services/todo-service"
import {TodoItem} from "./todo-item"

@Component({
    selector: "todo-list",
    directives: [TodoItem],
    template: `<div>
<ul>
<li *ngFor="#todo of todoService.todos">
    <todo-item [todo]="todo"></todo-item>
</li>
</ul>
</div>`
})
export class TodoList {
    constructor(public todoService: TodoService) {

    }

};
