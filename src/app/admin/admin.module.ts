import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminCreateNewsComponent } from './components/admin-create-news/admin-create-news.component';


@NgModule({
  declarations: [AdminDashboardComponent, AdminCreateNewsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
