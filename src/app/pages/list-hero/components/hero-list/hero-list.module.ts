import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FirstLetterUpperCasePipe } from '../../../../pipes/first-letter-uppercase.pipe';
import { CommonComponentsModule } from '../../../../components/common-components.module';
import { MatPaginatorIntlEs } from './es-paginator-int';

@NgModule({
  declarations: [
    HeroListComponent,
    FirstLetterUpperCasePipe
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    CommonComponentsModule
  ],
  exports: [
    HeroListComponent
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlEs
    }
  ]
})
export class HeroListModule { }
