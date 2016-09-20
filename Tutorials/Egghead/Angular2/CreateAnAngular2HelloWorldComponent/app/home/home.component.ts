import { Component } from "@angular/core";
import { SimpleService } from "./../services/services.module"
@Component({
    selector: "home",
    template: `
<div>I'm Home component</div>
<widget-one [message]="simpleService.message"></widget-one>
<widget-two></widget-two>
<div>{{simpleService.message}}</div>
<widget-one [message]="'Hello Papoi!'"></widget-one>
`
})
export class HomeComponent {
    constructor(private simpleService: SimpleService) { }
}
