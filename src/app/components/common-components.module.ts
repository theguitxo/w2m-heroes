import { NgModule } from '@angular/core';
import { ErrorDialogModule } from './error-dialog/error-dialog.module';
import { LoaderWrapperModule } from './loader-wrapper/loader-wrapper.module';
import { ConfirmModalModule } from './confirm-modal/confirm-nodal.module';

@NgModule({
  imports: [
    ErrorDialogModule,
    LoaderWrapperModule,
    ConfirmModalModule
  ],
  exports: [
    ErrorDialogModule,
    LoaderWrapperModule,
    ConfirmModalModule
  ]
})
export class CommonComponentsModule { }
