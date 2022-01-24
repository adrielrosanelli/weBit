import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorpoHomeComponent } from './pages/corpo-home/corpo-home.component';
import { HeaderComponent } from './pages/header/header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [
    HeaderComponent,
    CorpoHomeComponent,
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzImageModule,
    NzIconModule,
    NzDropDownModule
  ],
  exports: [
    CorpoHomeComponent,
    HeaderComponent,
  ]
})
export class HomeModule { }
