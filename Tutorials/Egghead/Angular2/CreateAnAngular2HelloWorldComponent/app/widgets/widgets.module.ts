import { NgModule } from '@angular/core';
import { WidgetOne } from "./widget-one.component"
import { WidgetTwo } from "./widget-two.component"
import { CommonModule } from "@angular/common"
@NgModule({
    imports: [CommonModule],
    declarations: [WidgetOne, WidgetTwo],
    exports: [WidgetOne, WidgetTwo, CommonModule]
})

export class WidgetsModule { }
