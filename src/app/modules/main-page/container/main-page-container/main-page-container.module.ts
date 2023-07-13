import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageContainerComponent} from "./main-page-container.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [MainPageContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MainPageContainerComponent
    }])
  ]
})
export class MainPageContainerModule { }
