import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ativo: String = "0";

  constructor() { }

  ngOnInit(): void {
  }

  ativou(valor: String) {
    this.ativo = valor;
  }

}
