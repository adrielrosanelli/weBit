import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weBit';
  public windowHeigth: number = 0;
  public windowWidth: number = 0;

  ngOnInit(): void {
    this.onResize();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeigth = window.innerHeight;
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 700) {
      document.getElementById('degrade')?.setAttribute('style', 'display: flex;flex-direction: column;height: 100%');
    } else {
      document.getElementById('degrade')?.setAttribute('style', 'display: flex ;flex-direction: column;height: auto;min-height:100%;background-size:cover');
    }
  }
}
