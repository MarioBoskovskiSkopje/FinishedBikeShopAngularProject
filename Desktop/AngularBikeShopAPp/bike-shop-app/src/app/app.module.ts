import { FilterService } from './services/filter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetJsonService } from './services/getjson.service';
import { RemoveduplicatesPipe } from './removeduplicates.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RemoveduplicatesPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [GetJsonService,FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
