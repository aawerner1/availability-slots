import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'profissionais',  loadChildren: () => import(`./modules/professionals.module`).then(m => m.ProfessionalsModule)},
  {path: '', redirectTo: '/profissionais/1', pathMatch: 'full' },
  {path: '**', redirectTo: '/profissionais/1' ,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
