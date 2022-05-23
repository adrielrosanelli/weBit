import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public idAnterior: String = '';

    public botoes: Array<any> = [];

    public windowHeigth:number = window.innerHeight;

    public windowWidth:number = window.innerWidth;

    public largura:String = "30%";

    constructor(private route: ActivatedRoute,private router: Router) {
        this.botoes = [
            {
                name: '1',
                descricao: 'Inicio',
                rota: '#inicio'
            },
            {
                name: '2',
                descricao: 'Sobre',
                rota: '#sobre'
            },
            {
                name: '3',
                descricao: 'Serviços',
                rota: '#servicos'
            },
            {
                name: '4',
                descricao: 'Equipe',
                rota: '#equipe'
            },
        ];
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
        document.getElementById('botao' + this.idAnterior)?.setAttribute('style', 'border-bottom: none;');
        document.getElementById('texto' + this.idAnterior)?.setAttribute('style', 'color: white;');
        document.getElementById('botao' + id)?.setAttribute('style', 'border-bottom: 3px solid #FFB701;');
        document.getElementById('texto' + id)?.setAttribute('style', 'color: #FFB701;');
        this.idAnterior = id;
    }
}
