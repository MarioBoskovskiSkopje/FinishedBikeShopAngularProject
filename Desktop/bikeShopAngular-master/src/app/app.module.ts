import { FilterService } from './services/filter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetJsonService } from './services/getjson.service';
import { RemoveduplicatesPipe } from './pipes/removeduplicates.pipe';
import { Removeduplicates1Pipe } from './pipes/removeduplicates1.pipe';
import { Removeduplicates2Pipe } from './pipes/removeduplicates2.pipe';
import { Removeduplicates3Pipe } from './pipes/removeduplicates3.pipe';
import { Removeduplicates4Pipe } from './pipes/removeduplicates4.pipe';
import { Removeduplicates5Pipe } from './pipes/removeduplicates5.pipe';
import { Removeduplicates6Pipe } from './pipes/removeduplicates6.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RemoveduplicatesPipe,
    Removeduplicates1Pipe,
    Removeduplicates2Pipe,
    Removeduplicates3Pipe,
    Removeduplicates4Pipe,
    Removeduplicates5Pipe,
    Removeduplicates6Pipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule

  ],
  providers: [GetJsonService, FilterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
