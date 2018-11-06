import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css'],
  inputs: ['rows']
})
export class MyTableComponent {
  public value: string = 'Select category';
  public products: { id: number, name: string, price: number, category: string, show: boolean }[] = [
    { id: 1, name: "product 1", price: 100, category: "Category 1", show: true },
    { id: 2, name: "product 2", price: 200, category: "Category 2", show: true },
    { id: 3, name: "product 3", price: 300, category: "Category 3", show: true },
    { id: 4, name: "product 4", price: 400, category: "Category 1", show: true },
    { id: 5, name: "product 5", price: 500, category: "Category 2", show: true },
    { id: 6, name: "product 6", price: 600, category: "Category 3", show: true },
    { id: 7, name: "product 7", price: 700, category: "Category 1", show: true },
    { id: 8, name: "product 8", price: 800, category: "Category 2", show: true },
    { id: 9, name: "product 9", price: 900, category: "Category 3", show: true },
    { id: 10, name: "product 10", price: 1000, category: "Category 1", show: true }
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
  onAdded(event: any){
    this.products.push(event);
    console.log(this.products);
  }
}