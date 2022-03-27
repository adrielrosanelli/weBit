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
  onOff() {
    document.getElementById('footer')!.style.opacity = "0.7";
    setTimeout(() => {
      document.getElementById('footer')!.style.opacity = "0.6";
      setTimeout(() => {
        document.getElementById('footer')!.style.opacity = "0.5";
        setTimeout(() => {
          document.getElementById('footer')!.style.opacity = "0.4";
          setTimeout(() => {
            document.getElementById('footer')!.style.opacity = "0.3";
            setTimeout(() => {
              document.getElementById('footer')!.style.opacity = "0.2";
            }, 15);
          }, 15);
        }, 15);
      }, 15);
    }, 15);
    setTimeout(() => {
      this.display = !this.display;
    }, 100);
  }

}
