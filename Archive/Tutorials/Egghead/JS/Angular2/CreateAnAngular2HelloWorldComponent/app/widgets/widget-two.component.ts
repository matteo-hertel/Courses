import { Component } from "@angular/core";

@Component({
    selector: "widget-two",
    styles:[
`

`
],
    template: `
<button (click)="toggleSelected()">Toggle Widget Two</button>
<div *ngIf="selected">

<ng-content select="[content]"></ng-content>
<ng-content select="[footer]"></ng-content>
<ng-content select="[header]"></ng-content>
</div>
`
})
export class WidgetTwo {
    selected = true;
    toggleSelected() {
        this.selected = !this.selected;
    }
}
