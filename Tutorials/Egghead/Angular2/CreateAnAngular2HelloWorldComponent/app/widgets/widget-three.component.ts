import { Component, ViewChild, Renderer, Input } from "@angular/core";

@Component({
    selector: "widget-three",
    styles: [
        `
input{
display:table;
}
`
    ],
    template: `
<input #input type="text" [value]="message" />
`
})
export class WidgetThree {
    @ViewChild("input") input: any;

    @Input() message: string = "default value";

    constructor(private renderer: Renderer) { }

    ngAfterViewInit() {
        this.renderer.invokeElementMethod(
            this.input.nativeElement,
            "focus"
        )
    }
}
