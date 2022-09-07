import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportarProblemaPageRoutingModule } from './reportar-problema-routing.module';

import { ReportarProblemaPage } from './reportar-problema.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportarProblemaPageRoutingModule
  ],
  declarations: [ReportarProblemaPage]
})
export class ReportarProblemaPageModule {}
