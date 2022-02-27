import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'corpo-contato',
  templateUrl: './corpo-contato.component.html',
  styleUrls: ['./corpo-contato.component.scss']
})
export class CorpoContatoComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    document.getElementById('contato')?.parentElement!.setAttribute('style', 'flex : 1');
  }

}
