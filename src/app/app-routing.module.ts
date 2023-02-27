import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './intranet/page/profile/profile.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { AuthGuard } from './securite/auth.guard';

const routes: Routes = [
  {path : '', component : ConnexionComponent},
  {path : 'mentions', component : MentionsComponent},
  {path : 'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule), canActivate:[AuthGuard], canLoad:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
