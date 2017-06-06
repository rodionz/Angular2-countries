import { SearchComponent } from '../search/search.component';


import { EventEmitter, Output, Injectable } from '@angular/core';
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

  constructor(private appservice: AppserviceService, private search : SearchComponent) { }


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

this.search.searchValueChanged.subscribe(result => {

  this.filteredCountries = result;

   console.log("working");
})

   // this.dataflow.emit(this.Regions);


  };

countryChanged(countries){

  this.filteredCountries = [];
   for(let country of countries)
   {
     if(true){
     this.filteredCountries.push(country)
   }
   }

};

    

  onClickMe(val) {

this.filteredCountries = [];

    for(let country of this.Countries){
    if(country.subregion == val){

      this.filteredCountries.push(country)

    } 

    }
  };

  onClickLang(lang) {
   
this.filteredCountries = [];

    for(let country of this.Countries){
    if(country.languages.includes(lang)){

      this.filteredCountries.push(country)

    } 

    }

  };





} 
