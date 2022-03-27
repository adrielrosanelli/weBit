import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorpoHomeComponent } from './pages/corpo-home/corpo-home.component';
import { HeaderComponent } from './pages/header/header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CorpoContatoComponent } from './pages/corpo-contato/corpo-contato.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent } from './pages/footer/footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    HeaderComponent,
    CorpoHomeComponent,
    CorpoContatoComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzImageModule,
    NzIconModule,
    NzDropDownModule,
    HomeRoutingModule,
    NzGridModule,
    SwiperModule,
  ],
  exports: [
    CorpoHomeComponent,
    HeaderComponent,
    CorpoContatoComponent,
    FooterComponent
  ]
})
export class HomeModule { }
