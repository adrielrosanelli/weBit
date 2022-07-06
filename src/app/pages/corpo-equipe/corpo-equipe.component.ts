import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-equipe',
  templateUrl: './corpo-equipe.component.html',
  styleUrls: ['./corpo-equipe.component.scss']
})
export class CorpoEquipeComponent implements OnInit {

  public listaColaboradores: Array<any> = [];

  constructor() {

  }

  ngOnInit(): void {
    // document.getElementById('equipe')?.parentElement!.setAttribute('style', 'flex : 1');
    this.getColaboradores();
  }

  getColaboradores() {
    this.listaColaboradores = [
      {
        'name': 'Vitor Zatta Junior',
        'role': 'Dono',
        'foto': 'assets\\images\\vitor.webp'
      },
      {
        'name': 'Gustavo Meurer',
        'role': 'Dono',
        'foto': 'assets\\images\\meurer.webp'
      },
      {
        'name': 'Patrick Paludo',
        'role': 'Dono',
        'foto': 'assets\\images\\paludo.webp'
      },
      {
        'name': 'Matheus Geovanas',
        'role': 'Dono',
        'foto': 'assets\\images\\matheus.webp'
      },
    ]
  }

}
