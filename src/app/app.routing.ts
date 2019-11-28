import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1 } from './components/c1.component';
import { C2 } from './components/c2.component';

const routes: Routes = [
  { path: 'c1', component: C1 },
   { path: 'c2', component: C2 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
