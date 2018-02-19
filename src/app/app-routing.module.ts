import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserDetalComponent } from "./user-detal/user-detal.component";

const routes: Routes = [
  {path: 'crud', component: UserCrudComponent},
  {path: 'users/:id/detal', component: UserDetalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
