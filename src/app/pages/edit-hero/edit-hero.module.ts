import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditHeroRoutingModule } from './edit-hero-routing.module';
import { EditHeroComponent } from './edit-hero.component';
import { CommonComponentsModule } from '../../components/common-components.module';
import { HeroFormModule } from './components/hero-form/hero-form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    EditHeroRoutingModule,
    CommonComponentsModule,
    HeroFormModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class EditHeroModule { }
