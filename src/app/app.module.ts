
import { NgControl } from '@angular/forms/src/directives';
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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownModule } from "ng2-dropdown";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SearchComponent,
    
  ],
  imports: [

    BrowserModule,
    FormsModule,
    DropdownModule,
    Ng2SearchPipeModule,
    HttpModule,
    JsonpModule,
    Ng2AutoCompleteModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
   RouterModule.forRoot([
            { path: '', component: BodyComponent },
           
        ])
    

  ],
  providers: [AppserviceService, BodyComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);