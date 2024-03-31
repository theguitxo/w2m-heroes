import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderWrapperComponent } from './loader-wrapper.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    LoaderWrapperComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderWrapperComponent
  ]
})
export class LoaderWrapperModule { }
