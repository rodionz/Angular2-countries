
import { SearchComponent } from '../search/search.component';
import { EventEmitter, Output, Injectable, Input } from '@angular/core';
import { AppserviceService } from 'app/app.service';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap'





@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})




@Injectable()
export class BodyComponent implements OnInit {

  constructor(private appservice: AppserviceService) { }


  @Input() inputFromSearch: any[] = [];

  filteredCountries: any[] = [];

  Countries: any[] = [];



  private Regions: string[] = [];

  private UnfilteredRegions: string[] = [];

  private Languages: string[] = [];

  private UnfilteredLanguages: string[] = [];

  simpleValue: string;

  simpleValue2: string;

  @Output() dataflow: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.appservice.getCountries()
      .subscribe(result => {
        this.Countries = result,
          this.filteredCountries = this.Countries;


        for (let contry of this.Countries) {

          this.UnfilteredRegions.push(contry.subregion)
          this.UnfilteredLanguages.push(contry.languages)
        }


        this.Regions = this.UnfilteredRegions.reduce(function (a, b) {
          if (a.indexOf(b) < 0 && b != "") a.push(b);
          return a;
        }, []);



        var temparr: any[] = [];
        for (let arr of this.UnfilteredLanguages) {
          temparr = temparr.concat(arr)
        }

        this.Languages = temparr.reduce(function (a, b) {
          if (a.indexOf(b) < 0) a.push(b);
          return a;
        }, []);



      })


this.appservice.searchValueChanged.subscribe(result => {



  this.filteredCountries = [];

  this.filteredCountries.push(result)
})
  };



  onClickMe(val) {

    this.filteredCountries = this.Countries;

    let temp = this.filteredCountries;

    this.filteredCountries = [];



    for (let country of temp) {
      if (country.subregion == val) {

        this.filteredCountries.push(country)

      }

    }
  };

  onClickLang(lang) {

    this.filteredCountries = this.Countries;

    let temp = this.filteredCountries;

    this.filteredCountries = [];

    for (let country of temp) {
      if (country.languages.includes(lang)) {

        this.filteredCountries.push(country)

      }

    }

  };



getClass(){
if(this.appservice.countrySelected == false)
{
  console.log('hidden');
 return 'hidden';
}

else{

console.log('visible')
return 'visible'

}

}

} 
