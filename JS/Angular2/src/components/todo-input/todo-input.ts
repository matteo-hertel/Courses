import {Component} from "angular2/core";
import {TodoService} from "./../../services/todo-service"

@Component({
    selector: "todo-input",
    template: `
<div>
<input type="text" #myInput />
<button (mouseover)="onMouseover($event)">Hover Me</button>
<button (click)="onClick(myInput.value)">Click Me</button>
</div>
`
})
export class TodoInput {

    constructor(public todoService: TodoService) {

        console.log(todoService);
    }

    onClick(value) {
        this.todoService.todos.push(value);
    };
    onMouseover(e) {
        console.log(e);
    }
};
