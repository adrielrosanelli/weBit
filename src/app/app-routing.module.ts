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
    pathMatch: "prefix",
  },
  {
    path: 'inicio',
        component: CorpoHomeComponent,
  },
  {
    path: 'contato',
    component: CorpoContatoComponent,
  },
  {
    path: 'sobre',
    component: CorpoSobreComponent
  },
  {
    path: 'servicos',
    component: CorpoServicosComponent
  },
  {
    path: 'equipe',
    component: CorpoEquipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
