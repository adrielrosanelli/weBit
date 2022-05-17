import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-servicos',
  templateUrl: './corpo-servicos.component.html',
  styleUrls: ['./corpo-servicos.component.scss']
})
export class CorpoServicosComponent implements OnInit {

  public testeado = [
    {
      nome: 'Marcelo',
      descricao: 'eadsd asd awd '
    },
    {
      nome: 'Augusto',
      descricao: 'eadsd asd awd '
    },
    {
      nome: 'Sezar',
      descricao: 'eadsd asd awd '
    },
    {
      nome: 'Kaue',
      descricao: 'eadsd asd awd '
    },

  ];


  constructor() {

  }

  ngOnInit(): void {
    document.getElementById('servicos')?.parentElement!.setAttribute('style', 'flex : 1');
  }


}
