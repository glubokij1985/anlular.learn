import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { MySetterComponent } from './components/my-setter/my-setter.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HelloWorldComponent,
        MyTableComponent,
        MySetterComponent
    ],
    exports: [
        HelloWorldComponent,
        MyTableComponent,
        MySetterComponent
    ],
})
export class SharedModule {}