import { EventEmitter, Output, Injectable } from '@angular/core';
import { AppserviceService } from 'app/app.service';
import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap'




@Component({
  selector: 'body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})




@Injectable()
export class BodyComponent implements OnInit {

  constructor(private appservice: AppserviceService) { }

  private Countries: any[] = [];

  private Regions: string[] = [];

  private UnfilteredRegions: string[] = [];

  private Languages: string[] = [];

  private UnfilteredLanguages: string[] = [];


  ngOnInit() {
    this.appservice.getCountries()
      .subscribe(cars => {
        this.Countries = cars;


        for (let contry of this.Countries) {

          this.UnfilteredRegions.push(contry.subregion)
          this.UnfilteredLanguages.push(contry.languages)

          this.Regions = this.UnfilteredRegions.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
        }

        var temparr: any[] = [];
        for (let arr of this.UnfilteredLanguages) {
          temparr = temparr.concat(arr)
        }

        this.Languages = temparr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
       },[]);

     
           //  console.log(this.Languages, this.Regions)
      }
                
      )
       this.dataflow.emit(this.Regions)
  }


   @Output() dataflow: EventEmitter<any> = new EventEmitter();  
} 
