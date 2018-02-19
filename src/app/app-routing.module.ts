import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCrudComponent } from "./user-crud/user-crud.component";
import { UserDetalComponent } from "./user-detal/user-detal.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserAddComponent } from "./user-add/user-add.component";


const routes: Routes = [
  {path: 'crud', component: UserCrudComponent},
  {path: 'users/:id/detal', component: UserDetalComponent},
  {path: 'users/:id/edit', component: UserEditComponent},
  {path: 'users/add', component: UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
