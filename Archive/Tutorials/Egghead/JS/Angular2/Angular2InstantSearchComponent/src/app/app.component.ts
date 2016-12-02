import { Component } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
@Component({
    // moduleId: module.id,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [WikipediaSearchService]
})
export class AppComponent {
    items: string[];
    term$ = new Subject<string>();

    constructor(private service: WikipediaSearchService) { }

    ngOnInit() {
        this.service
            .search(this.term$)
            .subscribe(results => this.items = results);
    }
}
