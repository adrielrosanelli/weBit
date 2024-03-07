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
    this.carregaAnimacao('imagem');
    this.carregaAnimacao('escrita');

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeight = window.innerHeight - 85;
    this.windowHeightFather = window.innerHeight - 102;
    this.windowWidth = window.innerWidth;
  }

  carregaAnimacao(elementName:string){
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {

        const square = document.getElementsByClassName(elementName)[0];
    
        if (entry.isIntersecting) {
          square!.classList.add(elementName+'-animation');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square!.classList.remove(elementName+'-animation');
      });
    });
    
    observer.observe(document.querySelector('.'+elementName)!);
  }
}