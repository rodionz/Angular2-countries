import { templateJitUrl } from '@angular/compiler/compiler';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Input } from '@angular/core/core';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppserviceService } from "app/app.service";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {




  constructor(private appservice: AppserviceService, private _sanitizer: DomSanitizer, private body : BodyComponent) { }

  allCountries: any[] = []



  myresource: any[] = [];

  ngOnInit() {

    this.appservice.getCountries()
      .subscribe(result => {
        this.allCountries = result;
      })

  };

  temp: any[] = [];

  valueChanged(newVal) {

 this.appservice.getCountries()
  .subscribe(result => {       
 for (let obj of result) {
      if (obj.name == newVal.name) {
        this.temp.push(obj)
      }
    }

this.body.countryChanged(this.temp)
      })


   

   // this.allCountries = this.temp;
    //this.body.filteredCountries = [];

    //   this.body.filteredCountries.push(newVal);

  }
  autocompleListFormatter = (data: any): SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
}
