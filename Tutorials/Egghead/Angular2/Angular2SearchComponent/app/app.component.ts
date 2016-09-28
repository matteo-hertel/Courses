import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<input
type="text"
[(ngModel)]="username"
#usernameRef="ngModel"
required
minlength="3"
>
<div *ngIf="usernameRef.errors?.required">This field is required</div>
<div *ngIf="usernameRef.errors?.minlength">
This field must be longer than {{usernameRef.errors?.minlength.requiredLength}} characters.
You only typed <b>{{usernameRef.errors?.minlength.actualLength}}</b> carachter(s).
</div>
`
})
export class AppComponent {
    private username: string = "lol";
}
