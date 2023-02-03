import { Component, HostListener, OnInit } from '@angular/core';
import { Servico } from 'src/app/modelo/servico.model';
import { ValorService } from '../../services/valor.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public windowHeight: any = window.innerHeight;
  public windowWidth: number = window.innerWidth;

  servicos: Array<Servico> = [];

  constructor(
    private valorService:ValorService
  ) { 
    this.servicos = valorService.servicos;
  }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }

  ativo(id:string){
    this.valorService.ativo(id);
  }

}