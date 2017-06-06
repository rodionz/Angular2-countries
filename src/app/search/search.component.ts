import { templateJitUrl } from '@angular/compiler/compiler';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Input } from '@angular/core/core';
import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { AppserviceService } from "app/app.service";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

@Injectable()
export class SearchComponent implements OnInit {


 @Output() searchValueChanged: EventEmitter<any> = new EventEmitter();

  constructor(private appservice: AppserviceService, private _sanitizer: DomSanitizer) { }

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

//this.body.countryChanged(this.temp);

this.searchValueChanged.emit(this.temp)
      });



  }
  autocompleListFormatter = (data: any): SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
}
