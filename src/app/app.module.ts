import { RouterModule } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { AppserviceService } from 'app/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SearchComponent } from './search/search.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ListOfCarsComponent } from './body/list-of-cars/list-of-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SearchComponent,
    ListOfCarsComponent
  ],
  imports: [
   
    BrowserModule,
    HttpModule,
    JsonpModule,
        RouterModule.forRoot([
           {path : '', component : BodyComponent}
        ])
    
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);