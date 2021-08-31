import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorpoHomeComponent } from './pages/corpo-home/corpo-home.component';



@NgModule({
  declarations: [
    CorpoHomeComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    CorpoHomeComponent
  ]
})
export class HomeModule { }
