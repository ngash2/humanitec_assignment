import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from './programs/programs/programs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'programs',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'programs'
  },
  {
    path: 'programs',
    component: ProgramsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
