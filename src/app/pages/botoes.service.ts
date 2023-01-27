import { Injectable } from '@angular/core';
import { BotaoInicial } from './modelo/botaoInicial.model';

@Injectable({
  providedIn: 'root'
})
export class BotoesService {
  idAnterior: string = '';
  botoesInicias: Array<BotaoInicial> = [
    {
        name: '1',
        descricao: 'Inicio',
        rota: '#inicio'
    },
    {
        name: '2',
        descricao: 'Serviços',
        rota: '#servicos'
    },
    {
        name: '3',
        descricao: 'Sobre',
        rota: '#sobre'
    },
    {
        name: '4',
        descricao: 'Equipe',
        rota: '#equipe'
    },
];

  constructor() { }

  ativo(id: string) {
    document.getElementById('botao' + this.idAnterior)?.setAttribute('style', 'border-bottom: none;');
    document.getElementById('texto' + this.idAnterior)?.setAttribute('style', 'color: white;');
    document.getElementById('botao' + id)?.setAttribute('style', 'border-bottom: 3px solid #FFB701;');
    document.getElementById('texto' + id)?.setAttribute('style', 'color: #FFB701;');
    this.idAnterior = id;
}
}
