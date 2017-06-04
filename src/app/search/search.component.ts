import { Component, OnInit } from '@angular/core';
import { AppserviceService } from "app/app.service";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private appservice : AppserviceService) { }

 private cars : {}

  ngOnInit() {

    this.appservice.getCars()
    .subscribe(cars => {
      this.cars = cars;
      console.log(this.cars);
    });
}
}