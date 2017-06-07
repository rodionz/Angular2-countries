import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import { SearchComponent } from './search/search.component';
import { Http } from '@angular/http';


@Injectable()
export class AppserviceService {

  constructor(private http:Http) { }


searchValueChanged: EventEmitter<any> = new EventEmitter();

countrySelected : boolean = false;


getCountries(){

  return this.http.get("https://restcountries.eu/rest/v1/name/is")
      .map(res => res.json());
}

}
