import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { SimpleService } from "./../services/services.module"
import { WidgetThree } from "./../widgets/widget-three.component";
@Component({
    selector: "home2",
    template: `
<button (click)="moveComponentToRandomIndex()">Move Component</button>
<div #container></div>
`
})
export class HomeComponent2 {
    addedComponent: number = 0;
    widgetRef: any;
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
        this.widgetRef = this.container.createComponent(widgetFactory, 2);
        this.widgetRef.instance.message = "I'm third!";
    }

    addComponent() {
        this.addedComponent++;
        const widgetFactory = this.resolver.resolveComponentFactory(WidgetThree);
        const widgetRef = this.container.createComponent(widgetFactory);
        widgetRef.instance.message = `I'm added component n ${this.addedComponent}!`;
    }

    moveComponentToRandomIndex() {
        let randomIndex = Math.floor(Math.random() * this.container.length)
        this.container.move(this.widgetRef.hostView, randomIndex);
        this.widgetRef.instance.message = `I'm position #${randomIndex + 1}!`;
    }
}
