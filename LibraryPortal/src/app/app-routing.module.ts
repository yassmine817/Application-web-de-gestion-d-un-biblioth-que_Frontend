import { AddAuteursComponent } from './auteurs/add-auteurs/add-auteurs.component';
import { AddLivreComponent } from './livres/add-livre/add-livre.component';
import { ViewLivreComponent } from './livres/view-livre/view-livre.component';
import { LivresComponent } from './livres/livres.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import { AuteursComponent } from './auteurs/auteurs.component';

const routes: Routes = [
  {path:'',
   component: LivresComponent
  },
  {
    path:'livres',
    component:LivresComponent
  },

  {
    path:'add/livre',
    component:AddLivreComponent
  },
  {
    path:'livresDetail/:id',
    component:ViewLivreComponent
  },

  {
    path:'AuteurList',
    component:AuteursComponent
  },
  {
    path:'add/auteur',
    component:AddAuteursComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
