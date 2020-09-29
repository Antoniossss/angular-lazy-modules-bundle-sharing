import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdModuleRoutingModule } from './third-module-routing.module';
import { FmtestComponent } from './fmtest/fmtest.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [FmtestComponent],
  imports: [
    CommonModule,
    RouterModule,
    ThirdModuleRoutingModule
  ]
})
export class ThirdModuleModule { }
