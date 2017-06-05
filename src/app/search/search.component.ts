import { Component, OnInit } from '@angular/core';
import { AppserviceService } from "app/app.service";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

 private cars : {}

  ngOnInit() {

   };
}
