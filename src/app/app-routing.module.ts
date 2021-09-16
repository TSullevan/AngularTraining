import { NgModule } from "@angular/core";
import { PreloadAllModules, Router, RouterModule, Routes } from "@angular/router";
import { CrudPageComponent } from "./crud/pages/crud-page/crud-page.component";
import { HomePageComponent } from "./home/pages/home-page/home-page.component";
import { RegisterPageComponent } from "./register/pages/register-page/register-page.component";
import { MasterPageComponent } from "./shared/pages/master-page/master-page.component";
import { NotFoundPageComponent } from "./shared/pages/not-found-page/not-found-page.component";

const desktopRoutes: Routes = [
  //   {
  //     path: 'login',
  //     component: LoginComponent
  //   },
  {
    path: '',
    component: MasterPageComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'cadastrar',
        component: RegisterPageComponent
      },
      {
        path: 'crud',
        component: CrudPageComponent
      }
    ]
  },
];

const defaultRoutes: Routes = [
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot([...desktopRoutes, ...defaultRoutes],
    {
      scrollPositionRestoration: 'disabled',
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig([...desktopRoutes, ...defaultRoutes]);
  }
}
