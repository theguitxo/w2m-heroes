import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListHeroRoutingModule } from './list-hero-routing.module';
import { ListHeroComponent } from './list-hero.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputFilterModule } from './components/input-filter/input-filter.module';
import { HeroListModule } from './components/hero-list/hero-list.module';
import { CommonComponentsModule } from '../../components/common-components.module';

@NgModule({
  declarations: [
    ListHeroComponent
  ],
  imports: [
    CommonModule,
    ListHeroRoutingModule,
    InputFilterModule,
    HeroListModule,
    MatButtonModule,
    MatIconModule,
    CommonComponentsModule
  ]
})
export class ListHeroModule { }
