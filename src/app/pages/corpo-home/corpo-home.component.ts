import { Component, HostListener, Input, OnInit } from '@angular/core';
import SwiperCore, { Autoplay } from "swiper";
@Component({
  selector: 'corpo-home',
  templateUrl: './corpo-home.component.html',
  styleUrls: ['./corpo-home.component.scss']
})
export class CorpoHomeComponent implements OnInit {

  public windowHeight: any = window.innerHeight;
  public windowWidth: number = window.innerWidth;

  @Input()
  height: any;

  @Input()
  width: any;

  constructor() {

  }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeight = window.innerHeight - 180;
    this.windowWidth = window.innerWidth - 70;
  }



}
