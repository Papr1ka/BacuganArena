import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AdminComponent } from './admin.component';
import { AdminCreateNewsComponent, AdminDashboardComponent, AdminEditNewsComponent } from './components';

const routes: Routes = [
  {
    path : "admin",
    component : AdminComponent,
    canActivate : [AuthGuard],
    children : [
      {
        path : "",
        children : [
          { path : "create", component : AdminCreateNewsComponent },
          { path : "edit", component : AdminEditNewsComponent },
          { path : "", component : AdminDashboardComponent },
        ]
      }
    ]
  }
];

export const adminRouterComponents = [
  AdminComponent,
  AdminCreateNewsComponent,
  AdminEditNewsComponent,
  AdminDashboardComponent
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
