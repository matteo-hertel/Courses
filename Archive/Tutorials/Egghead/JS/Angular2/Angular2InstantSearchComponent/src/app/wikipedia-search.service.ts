// #docregion
import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class WikipediaSearchService {
    constructor(private jsonp: Jsonp) { }

    search(terms: Observable<string>, debounceMs:number = 400){
        return terms.debounceTime(debounceMs)
        .distinctUntilChanged()
        .switchMap(term => this.rawsearch(term));
    }

    rawsearch(term: string) {

        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();
        params.set('search', term); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        let obs = this.jsonp
            .get(wikiUrl, { search: params })
            .map(response => <string[]>response.json()[1]);
        if (term.length === 2) {
            obs = obs.delay(1000)
        }
        return obs;
    }
}
