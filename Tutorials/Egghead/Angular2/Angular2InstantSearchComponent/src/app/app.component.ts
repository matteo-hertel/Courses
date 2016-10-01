import { Component } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service';
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/map";

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

    search(term: string) {
        this.service.search(term).subscribe(results => this.items = results);
    }

    ngOnInit() {
        this.term$.subscribe(term => this.search(term));
    }
}
