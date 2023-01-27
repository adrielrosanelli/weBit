import { Component, HostListener, OnInit } from '@angular/core';
import { BotoesService } from '../botoes.service';
import { BotaoInicial } from '../modelo/botaoInicial.model';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public botoes: Array<BotaoInicial> = [];

    public windowHeigth:number = window.innerHeight;

    public windowWidth:number = window.innerWidth;

    public largura:String = "30%";

    public isVisible: boolean = false;

    public nome: string = '';

    public descricao: string = '';

    constructor(
        private botoesService: BotoesService
        ) {
        this.botoes = botoesService.botoesInicias;
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.windowHeigth = window.innerHeight;
        this.windowWidth = window.innerWidth;
        if (window.innerWidth >= 1400) {
            this.largura = (this.windowWidth / 8).toString();
        } else if (window.innerWidth >= 710) {
            this.largura = (this.windowWidth / 5).toString();
        } else if (window.innerWidth <= 700) {
            this.largura = "150";
        }

    }

    ngOnInit(): void {
        this.onResize();
    }

    ativo(id: string) {
        this.botoesService.ativo(id);
    }

    showModal(){
        this.isVisible = true;
    }

    cancel(){
        this.isVisible = false;
    }

    confirm(){
        this.isVisible = false;
    }
}