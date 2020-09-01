import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'repositories', component: RepositoriesComponent },
  // { path: '', redirectTo: '/user-profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
