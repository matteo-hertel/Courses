import { NgModule } from '@angular/core';
import { WidgetOne } from "./widget-one.component"
import { WidgetTwo } from "./widget-two.component"
import { WidgetThree } from "./widget-three.component"
import { CommonModule } from "@angular/common"
@NgModule({
    imports: [CommonModule],
    declarations: [WidgetOne, WidgetTwo, WidgetThree],
    exports: [WidgetOne, WidgetTwo, WidgetThree, CommonModule]
})

export class WidgetsModule { }
