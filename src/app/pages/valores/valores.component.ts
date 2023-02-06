import { Component, OnInit } from '@angular/core';
import { AnimacaoService } from 'src/app/services/animacao.service';

@Component({
  selector: 'valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.scss']
})
export class ValoresComponent implements OnInit {

  constructor(private animacaoService: AnimacaoService) { }

  ngOnInit(): void {
    this.animacaoService.carregaAnimacao('valor');
    this.animacaoService.carregaAnimacao('visao');
    this.animacaoService.carregaAnimacao('missao');
  }

}
