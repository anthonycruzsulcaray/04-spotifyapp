import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './componnents/home/home.component';
import { SearchComponent } from './componnents/search/search.component';
import { ArtistaComponent } from './componnents/artista/artista.component';
import { NavbarComponent } from './componnents/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES, { useHash: true })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
