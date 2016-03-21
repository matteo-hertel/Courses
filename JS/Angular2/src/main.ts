

//These first 3 lines will be deprecated by the final release
import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {TodoInput} from "./components/todo-input/todo-input"
import {TodoService} from "./services/todo-service"

@Component({
    selector:`app`,
    directives : [TodoInput],
    template: `<div>
        <todo-input></todo-input>
    </div>`
})
class App{
}

bootstrap(App, [TodoService]);
