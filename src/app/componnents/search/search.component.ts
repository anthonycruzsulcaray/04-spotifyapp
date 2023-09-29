import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotifyservice: SpotifyService) {}

  buscar(keyword: string) {
    console.log(keyword);
    this.loading = true;
    this.spotifyservice.getArtistas(keyword).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
      this.loading = false;
    });
  }
}
