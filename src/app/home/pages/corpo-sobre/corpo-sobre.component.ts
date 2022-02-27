import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'corpo-sobre',
  templateUrl: './corpo-sobre.component.html',
  styleUrls: ['./corpo-sobre.component.scss']
})
export class CorpoSobreComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    document.getElementById('sobre')?.parentElement!.setAttribute('style', 'flex : 1');
  }

}
