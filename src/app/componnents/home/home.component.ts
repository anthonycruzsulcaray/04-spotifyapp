import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  nuevasCanciones: any[] = [];

  constructor(private spotifyService: SpotifyService) {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log('data api:', data);
      this.nuevasCanciones = data;
    });
  }
}
