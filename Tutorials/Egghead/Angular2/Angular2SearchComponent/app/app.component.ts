import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styles:[
`
input{
display: block;
margin: 5px;

}
input.ng-invalid {
    border: 3px solid red;
}
input.ng-valid input{
    border: 3px solid green;
}
`
],
    template: `
<form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
    <fieldset ngModelGroup="login">
        <input
            name="username"
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
        <input type="password" ngModel name="password">
    </fieldset>
    <button type="submit">Submit</button>
</form>
{{formRef.value | json}}
{{formRef.valid | json}}
`
})
export class AppComponent {
    private username: string = "Papoi";
    onSubmit(formValue:any) {
        console.log(formValue);
    }
}
