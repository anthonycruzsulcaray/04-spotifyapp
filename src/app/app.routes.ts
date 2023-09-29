import { Routes } from "@angular/router";
import { HomeComponent } from "./componnents/home/home.component";
import { SearchComponent } from "./componnents/search/search.component";
import { ArtistaComponent } from "./componnents/artista/artista.component";

export const ROUTES: Routes= [
    {path:'home', component: HomeComponent},
    {path:'search', component: SearchComponent},
    {path:'artist/:id', component: ArtistaComponent},
    {path:'', pathMatch: 'full',redirectTo: 'home'},
    {path:'**', pathMatch: 'full',redirectTo: 'home'}
];

