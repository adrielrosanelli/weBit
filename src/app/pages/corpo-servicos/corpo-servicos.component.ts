import { Component, OnInit } from '@angular/core';
import { ValorService } from 'src/app/services/valor.service';
import { Servico } from '../../modelo/servico.model';
@Component({
  selector: 'corpo-servicos',
  templateUrl: './corpo-servicos.component.html',
  styleUrls: ['./corpo-servicos.component.scss']
})
export class CorpoServicosComponent implements OnInit {

  servicos: Array<Servico> = [];

  constructor(valorService:ValorService) {
    this.servicos = valorService.servicos;
  }

  ngOnInit(): void {
    document.getElementById('servicos')?.parentElement!.setAttribute('style', 'flex : 1');
  }


}
