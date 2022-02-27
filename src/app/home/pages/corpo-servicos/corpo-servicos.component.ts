import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-servicos',
  templateUrl: './corpo-servicos.component.html',
  styleUrls: ['./corpo-servicos.component.scss']
})
export class CorpoServicosComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    document.getElementById('servicos')?.parentElement!.setAttribute('style', 'flex : 1');
  }

}
