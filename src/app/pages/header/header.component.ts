import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

    constructor(private route: ActivatedRoute,private router: Router) {
        this.botoes = [
            {
                name: '1',
                descricao: 'Inicio',
                rota: '/inicio'
            },
            {
                name: '2',
                descricao: 'Contato',
                rota: 'contato'
            },
            {
                name: '3',
                descricao: 'Sobre',
                rota: 'sobre'
            },
            {
                name: '4',
                descricao: 'Serviços',
                rota: 'servicos'
            },
            {
                name: '5',
                descricao: 'Equipe',
                rota: 'equipe'
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


    // ativou(valor:any) {
    //     this.ativo = valor.name;

    //     this.router.navigate(['/' + valor.rota])

    // }

    ngOnInit(): void {
        this.onResize();
    }

}
