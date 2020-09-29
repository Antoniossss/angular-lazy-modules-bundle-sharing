import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FirstModuleRoutingModule} from './first-module-routing.module';
import {FmtestComponent} from './fmtest/fmtest.component';
import {EditorModule} from "@tinymce/tinymce-angular";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [FmtestComponent],
  imports: [
    CommonModule,
    FirstModuleRoutingModule,
    RouterModule,
    EditorModule
  ]
})
export class FirstModuleModule {
}
