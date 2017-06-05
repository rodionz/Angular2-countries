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

items: any[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];


  constructor(private body: BodyComponent, ) { }

 private continents:any[]

  subscription :any;


  ngOnInit() {

    this.subscription = this.body.dataflow
    .subscribe((result :any []) => {
      this.continents = result
    })

   };
}
