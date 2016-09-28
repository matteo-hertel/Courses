import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<input required type="text"
#usernameRef="ngModel"
[(ngModel)]="username">
<p>Valid: {{usernameRef.valid}}</p>
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
