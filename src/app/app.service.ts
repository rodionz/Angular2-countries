import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SearchComponent } from './search/search.component';
import { Http } from '@angular/http';


@Injectable()
export class AppserviceService {

  constructor(private http:Http) { }


getCountries(){

  return this.http.get("https://restcountries.eu/rest/v1/name/is")
      .map(res => res.json());
}

}
