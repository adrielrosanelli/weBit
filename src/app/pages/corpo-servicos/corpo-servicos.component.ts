import { Component, OnInit } from '@angular/core';
import { AnimacaoService } from 'src/app/services/animacao.service';
import { ValorService } from 'src/app/services/valor.service';
import { Servico } from '../../modelo/servico.model';
@Component({
  selector: 'corpo-servicos',
  templateUrl: './corpo-servicos.component.html',
  styleUrls: ['./corpo-servicos.component.scss']
})
export class CorpoServicosComponent implements OnInit {

  servicos: Array<Servico> = [];

  constructor(
    private valorService:ValorService,
    private animacaoService: AnimacaoService) {
    this.servicos = valorService.servicos;
  }

  ngOnInit(): void {
    document.getElementById('servicos')?.parentElement!.setAttribute('style', 'flex : 1');
    this.animacaoService.carregaAnimacao('left');
    this.animacaoService.carregaAnimacao('rigth');
  }


}
