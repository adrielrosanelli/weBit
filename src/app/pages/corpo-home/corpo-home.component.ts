import { Component, HostListener, Input, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-home',
  templateUrl: './corpo-home.component.html',
  styleUrls: ['./corpo-home.component.scss']
})
export class CorpoHomeComponent implements OnInit {

  public windowHeight: any = window.innerHeight;
  public windowHeightFather: any = window.innerHeight;
  public windowWidth: number = window.innerWidth;

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeight = window.innerHeight - 85;
    this.windowHeightFather = window.innerHeight - 102;
    this.windowWidth = window.innerWidth;
  }
}