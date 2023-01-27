import { Component, HostListener, OnInit } from '@angular/core';
import { BotoesService } from '../botoes.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public windowHeight: any = window.innerHeight;
  public windowWidth: number = window.innerWidth;

  constructor(
    private botoesService:BotoesService
  ) { }

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }

  ativo(id:string){
    this.botoesService.ativo(id);
  }

}