import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MyTableComponent } from './components/my-table/my-table.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HelloWorldComponent,
        MyTableComponent
    ],
    exports: [
        HelloWorldComponent,
        MyTableComponent
    ],
})
export class SharedModule {}