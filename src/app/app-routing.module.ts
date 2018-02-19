import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserDetalComponent } from "./user-detal/user-detal.component";
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {path: 'crud', component: UserCrudComponent},
  {path: 'users/:id/detal', component: UserDetalComponent},
  {path: 'users/:id/edit', component: UserEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
