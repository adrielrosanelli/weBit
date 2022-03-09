import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public windowHeigth: any = window.innerHeight;
  public windowWidth: number = window.innerWidth;
  public display: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeigth = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }

}
