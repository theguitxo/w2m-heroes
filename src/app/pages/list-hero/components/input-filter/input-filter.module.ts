import { NgModule } from "@angular/core";
import { InputFilterComponent } from "./input-filter.component";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    InputFilterComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    InputFilterComponent
  ]
})
export class InputFilterModule {}
