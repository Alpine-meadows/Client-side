import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilterService {
    items: any;
    constructor(public http: Http) {
    }

    filterItems(searchTerm, properties){
        return properties.filter((property) => {
            return property.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });

    }

}
