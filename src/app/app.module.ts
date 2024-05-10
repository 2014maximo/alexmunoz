import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppModule { }
