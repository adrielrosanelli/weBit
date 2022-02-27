import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-equipe',
  templateUrl: './corpo-equipe.component.html',
  styleUrls: ['./corpo-equipe.component.scss']
})
export class CorpoEquipeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    document.getElementById('equipe')?.parentElement!.setAttribute('style', 'flex : 1');
  }

}
