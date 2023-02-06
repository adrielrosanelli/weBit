import { Component, OnInit } from '@angular/core';
import { AnimacaoService } from 'src/app/services/animacao.service';

@Component({
  selector: 'corpo-sobre',
  templateUrl: './corpo-sobre.component.html',
  styleUrls: ['./corpo-sobre.component.scss']
})
export class CorpoSobreComponent implements OnInit {

  constructor(private animacaoService: AnimacaoService) {

  }

  ngOnInit(): void {
    this.animacaoService.carregaAnimacao('conteudo-sobre');
    this.animacaoService.carregaAnimacao('imagem-sobre');
    // document.getElementById('sobre')?.parentElement!.setAttribute('style', 'flex : 1');
  }

}
