import { ViewLivreComponent } from './livres/view-livre/view-livre.component';
import { LivresComponent } from './livres/livres.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',
   component: LivresComponent
  },
  {
    path:'livres',
    component:LivresComponent
  },
  {
    path:'livresDetail/:id',
    component:ViewLivreComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
