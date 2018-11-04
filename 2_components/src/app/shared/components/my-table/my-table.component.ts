import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  inputs: ['rows']
})
export class MyTableComponent {
  public products: { id: number, name: string, price: number, show: boolean }[] = [
    { id: 1, name: "product 1", price: 100, show: true },
    { id: 2, name: "product 2", price: 200, show: true },
    { id: 3, name: "product 3", price: 300, show: true },
    { id: 4, name: "product 4", price: 400, show: true },
    { id: 5, name: "product 5", price: 500, show: true },
    { id: 6, name: "product 6", price: 600, show: true },
    { id: 7, name: "product 7", price: 700, show: true },
    { id: 8, name: "product 8", price: 800, show: true },
    { id: 9, name: "product 9", price: 900, show: true },
    { id: 10, name: "product 10", price: 1000, show: true }
  ];
  rows: number = this.products.length;
  get rowsAmount(): number{
    return this.rows;
  }
  removeRow(item: any){
    item.show = false;
    this.delete.emit(item);
  }
  @Output()
  delete: EventEmitter<Object> = new EventEmitter();
}