import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
    selector: "todo-item",
    template: `
<style>
.completed{
text-decoration : line-through;
}
</style>
<span class="{{todo.status}}">{{todo.title}}</span>
             <button (click)="toggle.emit(todo)">Toggle Status</button>`
})
export class TodoItem {
    @Input() todo;
    @Output() toggle = new EventEmitter()
};
