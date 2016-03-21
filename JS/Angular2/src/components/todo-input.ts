import {Component} from "angular2/core";
import {TodoService} from "./../services/todo-service"

@Component({
    selector: "todo-input",
    template: `
<div>
<input type="text" #myInput />
<button (click)="onClick(myInput)">Click Me</button>
<!--<button (mouseover)="onMouseover($event)">Hover Me</button>-->

</div>
`
})
export class TodoInput {

    constructor(public todoService: TodoService) {
        console.log(todoService);
    }

    onClick(el) {
        this.todoService.todos.push(el.value);
        el.value = "";
    };
    onMouseover(e) {
        console.log(e);
    }
};
