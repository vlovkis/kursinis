import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormPageComponent } from './form-page/form-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'form-page', component: FormPageComponent},
  {path : '', component : LoginComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
