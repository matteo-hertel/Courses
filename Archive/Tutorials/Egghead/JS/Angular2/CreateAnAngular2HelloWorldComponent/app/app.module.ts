import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesModule } from './services/services.module';
import { HomeModule } from "./home/home.module"
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, HomeModule, ServicesModule.forRoot()],
    declarations: [AppComponent,],
    bootstrap: [AppComponent]
})
export class AppModule { }
