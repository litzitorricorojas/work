import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankListComponent } from '../app/bank/bank-list/bank-list.component';

const routes: Routes = [
  {
    path: 'clients',
    component: BankListComponent,
    data: { title: 'Stories List' }
  },
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
