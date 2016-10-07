import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from './compartilhado/layout/page404/page404.component';

const routes: Routes = [
  { path: '/teste', redirectTo: '/404', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AutoFPRoutingModule { }
