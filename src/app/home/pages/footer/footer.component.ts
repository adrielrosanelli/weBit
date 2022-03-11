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
    document.getElementById('footer')!.style.height = "200px";
    setTimeout(() => {
      document.getElementById('footer')!.style.height = "175px";
      setTimeout(() => {
        document.getElementById('footer')!.style.height = "155px";
        setTimeout(() => {
          document.getElementById('footer')!.style.height = "135px";
          setTimeout(() => {
            document.getElementById('footer')!.style.height = "125px";
            setTimeout(() => {
              document.getElementById('footer')!.style.height = "100px";
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
