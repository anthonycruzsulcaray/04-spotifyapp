import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  constructor(private spotifyservice: SpotifyService) {}

  artistas: any[] = [];

  buscar(keyword: string) {
    console.log(keyword);
    this.spotifyservice.getArtista(keyword).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
    });
  }
}
