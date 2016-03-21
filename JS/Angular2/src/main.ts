

//These first 3 lines will be deprecated by the final release
import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {TodoInput} from "./components/todo-input"
import {TodoList} from "./components/todo-list"
import {TodoService} from "./services/todo-service"

@Component({
    selector: `app`,
    directives: [TodoInput, TodoList],
    template: `<div>
        <todo-input></todo-input>
        <todo-list></todo-list>
    </div>`
})
class App {
}

bootstrap(App, [TodoService]);
