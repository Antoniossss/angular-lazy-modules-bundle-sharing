import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: "first",
    loadChildren: () => import("./first-module/first-module.module").then(m => m.FirstModuleModule),
  },
  {
    path: "second",
    loadChildren: () => import("./second-module/second-module.module").then(m => m.SecondModuleModule),
  },
  {
    path: "third",
    loadChildren: () => import("./third-module/third-module.module").then(m => m.ThirdModuleModule),
  },
  {
    path: "**",
    redirectTo: "first"
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
