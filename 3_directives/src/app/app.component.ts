import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  rowsRemoveHandler(item: any){
    console.log(`Removed product had ID: ${item.id}`);
  }
}