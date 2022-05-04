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
    this.onScroll();
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeigth = window.innerHeight;
    this.windowWidth = window.innerWidth;

    document.getElementById('degrade')?.setAttribute('style', 'display: flex;flex-direction: column;height: 110%');
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (scrollY >= 1) {
      document.getElementById('header')?.classList.add('scroll');
      document.getElementById('corpo-home')?.classList.add('scrollado');
    } else {
      document.getElementById('corpo-home')?.classList.remove('scrollado');
      document.getElementById('header')?.classList.remove('scroll');
    }
  }
}
