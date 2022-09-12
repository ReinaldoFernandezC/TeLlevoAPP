import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportarProblemaPage } from './reportar-problema.page';

const routes: Routes = [
  {
    path: '',
    component: ReportarProblemaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportarProblemaPageRoutingModule {}
