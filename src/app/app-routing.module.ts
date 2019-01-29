import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', redirectTo: 'customers', pathMatch: 'full' }, // agregado

  { path: 'customers', loadChildren: './pages/customers/customers.module#CustomersPageModule' },
  { path: 'customer-detail', loadChildren: './pages/customer-detail/customer-detail.module#CustomerDetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
