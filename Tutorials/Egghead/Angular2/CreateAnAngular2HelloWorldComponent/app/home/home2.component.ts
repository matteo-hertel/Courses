import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { SimpleService } from "./../services/services.module"
import { WidgetThree } from "./../widgets/widget-three.component";
@Component({
    selector: "home2",
    template: `
<button (click)="addComponent()">Add Component</button>
<div #container></div>
`
})
export class HomeComponent2 {
    addedComponent:number = 0;
    @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) { }

    ngAfterContentInit() {
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        this.container.createComponent(widgetFactory);
        const widgetRef = this.container.createComponent(widgetFactory, 2);
        widgetRef.instance.message = "I'm third!";
    }

    addComponent() {
this.addedComponent++;
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
        const widgetRef = this.container.createComponent(widgetFactory);
        widgetRef.instance.message = `I'm added component n ${this.addedComponent}!`;
    }
}
