import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from "./home/home.module"
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, HomeModule],
    declarations: [AppComponent, ],
    bootstrap: [AppComponent]
})
export class AppModule { }
