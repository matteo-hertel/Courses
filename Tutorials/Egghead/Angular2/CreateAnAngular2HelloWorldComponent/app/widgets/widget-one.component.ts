import { Component } from "@angular/core";

@Component({
    selector: "widget-one",
    template: `
<button (click)="toggleSelected()">Toggle Widget One</button>
<div *ngIf="selected">One</div>
`
})
export class WidgetOne {
    selected = true;
    toggleSelected() {
        this.selected = !this.selected;
    }
}
