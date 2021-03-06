import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'page',component:PageComponent,canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
