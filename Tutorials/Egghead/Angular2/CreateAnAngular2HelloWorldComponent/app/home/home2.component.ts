import { Component, ViewChild, ViewContainerRef,ComponentFactoryResolver } from "@angular/core";
import { SimpleService } from "./../services/services.module"
import { WidgetThree } from "./../widgets/widget-three.component";
@Component({
    selector: "home2",
    template: `
<div #container></div>
`
})
export class HomeComponent2 {
    @ViewChild("container", {read:ViewContainerRef}) container: ViewContainerRef;

    constructor(private resolver:ComponentFactoryResolver){}

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
        const widgetRef = this.container.createComponent(widgetFactory);
        widgetRef.instance.message = "Papoi there!";
    }
}
