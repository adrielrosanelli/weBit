import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public ativo: String = "1";

    public botoes: Array<any> = [];

    public windowHeigth:number = window.innerHeight;

    public windowWidth:number = window.innerWidth;

    public largura:String = "30%";

    constructor() {
        this.botoes = [
            {
                name: '1',
                descricao: 'Inicio'
            },
            {
                name: '2',
                descricao: 'Contato'
            },
            {
                name: '3',
                descricao: 'Sobre'
            },
            {
                name: '4',
                descricao: 'Serviços'
            },
            {
                name: '5',
                descricao: 'Equipe'
            },
        ];
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.windowHeigth = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.largura = (this.windowWidth /5).toString();
    }


    ativou(valor: String) {
        this.ativo = valor;
    }

    ngOnInit(): void {
        this.onResize();
    }

}
