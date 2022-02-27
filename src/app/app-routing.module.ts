import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CorpoContatoComponent } from './home/pages/corpo-contato/corpo-contato.component';
import { CorpoEquipeComponent } from './home/pages/corpo-equipe/corpo-equipe.component';
import { CorpoHomeComponent } from './home/pages/corpo-home/corpo-home.component';
import { CorpoServicosComponent } from './home/pages/corpo-servicos/corpo-servicos.component';
import { CorpoSobreComponent } from './home/pages/corpo-sobre/corpo-sobre.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: "full",
  },
  {
    path:'inicio',
    component: HomeComponent,
    children:[
      {
        path:'',
        redirectTo: 'inicio',
        pathMatch: "full",
      },
      {
        path:'',
        component: CorpoHomeComponent,
      },
      {
        path:'contato',
        component:CorpoContatoComponent,
        outlet:'contato'
      },
      {
        path:'Sobre',
        component:CorpoSobreComponent
      },
      {
        path:'Serviços',
        component: CorpoServicosComponent
      },
      {
        path:'Equipe',
        component: CorpoEquipeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
