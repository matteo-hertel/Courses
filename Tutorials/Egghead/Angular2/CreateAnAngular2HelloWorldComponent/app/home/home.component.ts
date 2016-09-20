import { Component } from "@angular/core";
import { SimpleService } from "./../services/services.module"
@Component({
    selector: "home",
    template: `
<!--<widget-two>
    <widget-one [message]="simpleService.message"></widget-one>
</widget-two>
<widget-two>
    <h2 header>Title</h2>
    <div content>Some Content</div>
    <h3 footer>Footer</h3>
</widget-two>
-->
<widget-three></widget-three>
`
})
export class HomeComponent {
    constructor(private simpleService: SimpleService) { }
}
