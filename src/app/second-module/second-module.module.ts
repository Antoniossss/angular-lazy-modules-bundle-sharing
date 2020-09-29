import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondModuleRoutingModule } from './second-module-routing.module';
import { FmtestComponent } from './fmtest/fmtest.component';
import {RouterModule} from "@angular/router";
import {EditorModule} from "@tinymce/tinymce-angular";


@NgModule({
  declarations: [FmtestComponent],
  imports: [
    CommonModule,
    RouterModule,
    EditorModule,
    SecondModuleRoutingModule
  ]
})
export class SecondModuleModule { }
