import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-home',
  templateUrl: './corpo-home.component.html',
  styleUrls: ['./corpo-home.component.scss']
})
export class CorpoHomeComponent implements OnInit {

  public windowHeigth: any = window.innerHeight;
  public windowWidth: number = window.innerWidth;

  constructor() {
  }

  ngOnInit(): void {
    document.getElementsByTagName('home')[0].setAttribute('style', 'flex: 1');
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeigth = window.innerHeight;
    this.windowWidth = window.innerWidth;

  }

}
