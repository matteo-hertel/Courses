

//These first 3 lines will be deprecated by the final release
import 'reflect-metadata'
import 'zone.js'
import "angular2/angular2";

import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {TodoInput} from "./components/todo-input"
import {TodoList} from "./components/todo-list"
import {TodoService} from "./services/todo-service"
import {StatusSelector} from "./components/status-selector"
import {SearchBox} from "./components/search-box"

@Component({
    selector: `app`,
    directives: [TodoInput, TodoList, StatusSelector, SearchBox],
    template: `<div>
        <todo-input></todo-input>
        <search-box (update)="term = $event"></search-box>
        <status-selector (select)="status = $event"></status-selector>
        <todo-list [status]="status" [term]="term"></todo-list>
    </div>`
})
class App {
}

bootstrap(App, [TodoService]);
