import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<input type="text" [(ngModel)]="username">
<pre>
{{this | json}}
</pre>
`
})
export class AppComponent {
    private username: string = "Papoi";
    test(): string {
        return "test";
    }
}
