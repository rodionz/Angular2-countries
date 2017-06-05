import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Input } from '@angular/core/core';
import { Component, OnInit } from '@angular/core';
import { AppserviceService } from "app/app.service";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {




  constructor(private appservice: AppserviceService,private _sanitizer: DomSanitizer ) { }

  allCountries:any[] = []

  

 myresource :any [] = [];

  ngOnInit() {

    this.appservice.getCountries() 
    .subscribe(result => {
      this.allCountries = result;      
    })

   };


     valueChanged(newVal) {
    console.log(this.allCountries);
  }
    autocompleListFormatter = (data: any) : SafeHtml => {
    let html = `<span>${data.name}</span>`;
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
}
