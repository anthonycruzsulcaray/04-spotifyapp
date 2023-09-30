import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean = false;
  error: boolean = false;
  messageError: string = '';

  constructor(private spotifyService: SpotifyService, private router: Router) {
    this.loading = true;
    this.error = false;

    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        console.log('data api:', data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errService) => {
        this.loading = false;
        this.error = true;
        console.log('error api:', errService);
        console.log('error api:', errService.error.error.message);
        this.messageError = errService.error.error.message;
      }
    );
  }

  verArtista(item: any) {
    let idArtist;

    if (item.type == 'artists') {
      idArtist = item.id;
    } else {
      idArtist = item.artists[0].id;
    }
    console.log('idArtist:', idArtist);
    this.router.navigate(['artist/', idArtist]);
  }
}
