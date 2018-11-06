import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-setter',
  templateUrl: './my-setter.component.html',
  styleUrls: ['./my-setter.component.css'],
  inputs: ['rows']
})
export class MySetterComponent {
  public product: { id?: number, name?: string, price?: number, category?: string, show?: boolean } = {};

  addProduct(){
    this.added.emit(this.product);
  }
  @Output()
  added: EventEmitter<Object> = new EventEmitter();
}