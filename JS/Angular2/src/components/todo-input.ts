import {Component} from "angular2/core";
import {TodoService} from "./../services/todo-service"
import {TodoModel} from "./../models/todo-model"

@Component({
    selector: "todo-input",
    template: `
<div>
<form (submit)="onSubmit(myInput)">
<p>Add new Todo</p>
<input type="text" #myInput />

<!--<button (click)="onSubmit(myInput)">Click Me</button>
<button (mouseover)="onMouseover($event)">Hover Me</button>-->
</form>
</div>
`
})
export class TodoInput {


    constructor(public todoService: TodoService) {
        console.log(todoService);
    }

    onSubmit(el) {

        this.todoService.addTodo(new TodoModel(el.value));
        el.value = "";
    };
    onMouseover(e) {
        console.log(e);
    }
};
