import { Component, OnInit } from '@angular/core';
// import Swiper styles
import 'swiper/css';
import Swiper, { Navigation, Pagination } from 'swiper';
@Component({
  selector: 'corpo-servicos',
  templateUrl: './corpo-servicos.component.html',
  styleUrls: ['./corpo-servicos.component.scss']
})
export class CorpoServicosComponent implements OnInit {

  constructor() {
    Swiper.use([Navigation, Pagination]);
  }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

}
