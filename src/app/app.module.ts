import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './pages/header/header.component';
import { CorpoHomeComponent } from './pages/corpo-home/corpo-home.component';
import { CorpoContatoComponent } from './pages/corpo-contato/corpo-contato.component';
import { FooterComponent } from './/pages/footer/footer.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SwiperModule } from 'swiper/angular';
import { CorpoSobreComponent } from './pages/corpo-sobre/corpo-sobre.component';
import { CorpoServicosComponent } from './pages/corpo-servicos/corpo-servicos.component';
import { CorpoEquipeComponent } from './pages/corpo-equipe/corpo-equipe.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ValoresComponent } from './pages/valores/valores.component';
import { NavegacaoComponent } from './pages/navegacao/navegacao.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CorpoHomeComponent,
    CorpoContatoComponent,
    CorpoSobreComponent,
    CorpoServicosComponent,
    CorpoEquipeComponent,
    FooterComponent,
    ValoresComponent,
    NavegacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzImageModule,
    NzIconModule,
    NzDropDownModule,
    NzGridModule,
    SwiperModule,
    NzToolTipModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
