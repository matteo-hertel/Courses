import {Component} from "angular2/core";

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

    onClick(value) {
        console.log(value);
    };
    onMouseover(e) {
        console.log(e);
    }
};
