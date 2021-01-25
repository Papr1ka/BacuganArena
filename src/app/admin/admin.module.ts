import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule, adminRouterComponents} from './admin-routing.module';
import { CodemirrorModule } from '@ctrl/ngx-codemirror'


@NgModule({
  declarations: [adminRouterComponents],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CodemirrorModule
  ]
})
export class AdminModule { }
