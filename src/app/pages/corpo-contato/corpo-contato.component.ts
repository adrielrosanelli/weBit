import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-contato',
  templateUrl: './corpo-contato.component.html',
  styleUrls: ['./corpo-contato.component.scss']
})
export class CorpoContatoComponent implements OnInit {

  public larguraDaTela: number =0;
  constructor() {

  }

  ngOnInit(): void {
    this.larguraDaTela = window.innerWidth;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
      if(scrollY >=800 && this.larguraDaTela <1350){
        document.getElementById('contato')!.classList.add('fixado');
        var icones =document.getElementsByClassName('oculta-scroll');
        icones[0].classList.add('sumido');
        icones[1].classList.add('sumido');
        icones[2].classList.add('sumido');
        document.getElementById('contato')!.classList.add('animar-diminuicao');
        var icones = document.getElementsByClassName('icon');
        let primeiroIcone = icones[0] as HTMLElement;
        let segundoIcone = icones[4] as HTMLElement;
        primeiroIcone.style.color = '#FFB701';
        segundoIcone.style.color = '#FFB701';
      }else if(scrollY < 800 && this.larguraDaTela <1350){
        document.getElementById('contato')!.classList.remove('fixado');
        var icones =document.getElementsByClassName('oculta-scroll');
        icones[0].classList.remove('sumido');
        icones[1].classList.remove('sumido');
        icones[2].classList.remove('sumido');
        if(this.larguraDaTela >=1350)
          document.getElementById('contato')!.style.height = '300px';
        var icones = document.getElementsByClassName('icon');
        let primeiroIcone = icones[0] as HTMLElement;
        let segundoIcone = icones[4] as HTMLElement;
        primeiroIcone.style.color = 'white';
        segundoIcone.style.color = 'white';
      } else if (scrollY >= 1 ) {
        if(this.larguraDaTela >=1350){
          var icones =document.getElementsByClassName('oculta-scroll');
          icones[0].classList.add('sumido');
          icones[1].classList.add('sumido');
          icones[2].classList.add('sumido');
            document.getElementById('contato')!.style.height = '100px';
          document.getElementById('contato')!.classList.add('animar-diminuicao');
          var icones = document.getElementsByClassName('icon');
          let primeiroIcone = icones[0] as HTMLElement;
          let segundoIcone = icones[4] as HTMLElement;
          primeiroIcone.style.color = '#FFB701';
          segundoIcone.style.color = '#FFB701';
        }
      } else {
        var icones =document.getElementsByClassName('oculta-scroll');
        icones[0].classList.remove('sumido');
        icones[1].classList.remove('sumido');
        icones[2].classList.remove('sumido');
        if(this.larguraDaTela >=1350)
          document.getElementById('contato')!.style.height = '300px';
        var icones = document.getElementsByClassName('icon');
        let primeiroIcone = icones[0] as HTMLElement;
        let segundoIcone = icones[4] as HTMLElement;
        primeiroIcone.style.color = 'white';
        segundoIcone.style.color = 'white';
      }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    this.larguraDaTela = window.innerWidth;
  }



}
