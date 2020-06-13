import { Routes } from '@angular/router';
import { OrdemServicoComponent } from './ordem-servico/ordem-servico.component';

export const ROUTES: Routes = [
  {path: '**', redirectTo: 'ordem-servico'},
  {path: 'ordem-servico', component: OrdemServicoComponent}
]
