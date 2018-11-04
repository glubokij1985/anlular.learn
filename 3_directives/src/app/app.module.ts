import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { SharedModule } from './shared/shared.module';
import { MyTableComponent } from './shared/components/my-table/my-table.component';

@NgModule({
  imports:      [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'my-table', component: MyTableComponent },
    ])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
