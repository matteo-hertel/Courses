import { Component } from '@angular/core';


@Component({
    selector: 'my-form',
    styles: [
        `
        .ng-invalid + label:after{
        content: " <==Pick One!!"
        }
        `
    ],
    template: `
<hr />
<form #formRef="ngForm">
<div *ngFor="let location of locations">
<input
[id]="location"
name="locations"
type="radio"
ngModel
required
[value]="location">
<label [attr.for]="location">{{location}}</label>

</div>

<select [ngModel]="locations[0]" name="location">
<option *ngFor="let location of locations" [value]="location">{{location}}</option>
</select>
</form>
{{formRef.value | json}}

{{formRef.valid | json}}
`
})
export class FormComponent {
    private locations: string[] = ["Home", "Away", "Space", "Ocean", "Stars"];
}
