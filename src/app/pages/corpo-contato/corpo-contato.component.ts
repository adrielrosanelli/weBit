import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-contato',
  templateUrl: './corpo-contato.component.html',
  styleUrls: ['./corpo-contato.component.scss']
})
export class CorpoContatoComponent implements OnInit {

  constructor() {

  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (scrollY >= 1) {
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
    } else {
      var icones =document.getElementsByClassName('oculta-scroll');
      icones[0].classList.remove('sumido');
      icones[1].classList.remove('sumido');
      icones[2].classList.remove('sumido');
      document.getElementById('contato')!.style.height = '300px';
      var icones = document.getElementsByClassName('icon');
      let primeiroIcone = icones[0] as HTMLElement;
      let segundoIcone = icones[4] as HTMLElement;
      primeiroIcone.style.color = 'white';
      segundoIcone.style.color = 'white';
    }
  }

  ngOnInit(): void {
    // document.getElementById('contato')?.parentElement!.setAttribute('style', 'flex : 1');
  }

}
