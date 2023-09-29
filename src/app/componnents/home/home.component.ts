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

  constructor(private spotifyService: SpotifyService, private router: Router) {
    this.loading = true;

    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log('data api:', data);
      this.nuevasCanciones = data;
      this.loading = false;
    });
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
