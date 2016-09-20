import { Component } from "@angular/core";

@Component({
    selector: "widget-two",
    template: `
<button (click)="toggleSelected()">Toggle Widget Two</button>
<div *ngIf="selected"><ng-content></ng-content></div>
`
})
export class WidgetTwo {
    selected = true;
    toggleSelected() {
        this.selected = !this.selected;
    }
}
