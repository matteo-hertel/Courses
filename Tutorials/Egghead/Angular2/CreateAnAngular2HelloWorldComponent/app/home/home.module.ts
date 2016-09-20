import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component"
import { HomeComponent2 } from "./home2.component"
import { WidgetsModule } from "./../widgets/widgets.module"

@NgModule({
    imports: [WidgetsModule],
    declarations: [HomeComponent, HomeComponent2],
    exports: [HomeComponent, HomeComponent2]
})

export class HomeModule { }
