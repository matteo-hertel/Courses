import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { SimpleService } from "./../services/services.module"
import { WidgetThree } from "./../widgets/widget-three.component";
@Component({
    selector: "home3",
    template: `
    <button (click)="createTemplate()">Create Template</button>
    <div #container></div>
    <template #template let-description="description">
        <h2>My {{description}} Template</h2>
        <button>My {{description}} button</button>
    </template>
`
})
export class HomeComponent3 {
    addedComponent: number = 0;
    @ViewChild("container", { read: ViewContainerRef }) container: ViewContainerRef;
    @ViewChild("template") template: any;

    createTemplate() {
        this.container.createEmbeddedView(this.template, {
            description: "awesome"
        });
    }
}
