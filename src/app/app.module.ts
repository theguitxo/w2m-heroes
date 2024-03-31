import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProviders } from './interceptors';

import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './store/app.effect';

import { HeroService } from './services/heros.service';

import { MatToolbarModule } from '@angular/material/toolbar';
import { LoadingService } from './services/loader.service';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackBarService } from './services/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      store: storeReducer
    }),
    EffectsModule.forRoot(HeroEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true
    }),
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    HeroService,
    LoadingService,
    SnackBarService,
    interceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
