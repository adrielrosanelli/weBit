import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CorpoContatoComponent } from './pages/corpo-contato/corpo-contato.component';
import { CorpoEquipeComponent } from './pages/corpo-equipe/corpo-equipe.component';
import { CorpoHomeComponent } from './pages/corpo-home/corpo-home.component';
import { CorpoServicosComponent } from './pages/corpo-servicos/corpo-servicos.component';
import { CorpoSobreComponent } from './pages/corpo-sobre/corpo-sobre.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: "full",
  },
  {
    path: 'inicio',
        component: CorpoHomeComponent,
      },
      {
        path: '/weBit/contato',
        component:CorpoContatoComponent,
        outlet:'contato'
      },
      {
        path: '/weBit/Sobre',
        component:CorpoSobreComponent
      },
      {
        path: '/weBit/Serviços',
        component: CorpoServicosComponent
      },
      {
        path: '/weBit/Equipe',
        component: CorpoEquipeComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
