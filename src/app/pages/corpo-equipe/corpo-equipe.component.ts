import { Component, OnInit } from '@angular/core';
import { AnimacaoService } from 'src/app/services/animacao.service';
@Component({
  selector: 'corpo-equipe',
  templateUrl: './corpo-equipe.component.html',
  styleUrls: ['./corpo-equipe.component.scss']
})
export class CorpoEquipeComponent implements OnInit {

  public listaColaboradores: Array<any> = [];

  constructor(private animacaoService: AnimacaoService) {

  }

  ngOnInit(): void {
    // document.getElementById('equipe')?.parentElement!.setAttribute('style', 'flex : 1');
    this.getColaboradores();
    setTimeout(() => {
      
      this.animacaoService.carregaAnimacao('colaborador-0');
      this.animacaoService.carregaAnimacao('colaborador-1');
      this.animacaoService.carregaAnimacao('colaborador-2');
      this.animacaoService.carregaAnimacao('colaborador-3');
    }, 100);
  }

  getColaboradores() {
    this.listaColaboradores = [
      {
        'name': 'Vitor Zatta Junior',
        'role': 'Dono',
        'foto': 'assets\\images\\vitor.webp',
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
