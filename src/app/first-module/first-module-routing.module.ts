import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FmtestComponent} from "./fmtest/fmtest.component";


const routes: Routes = [
  {
    path: "**",
    component: FmtestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRoutingModule {
}
