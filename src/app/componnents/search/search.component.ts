import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean = false;

  constructor(private spotifyservice: SpotifyService,private router: Router) {}

  buscar(keyword: string) {
    console.log(keyword);
    this.loading = true;
    this.spotifyservice.getArtistas(keyword).subscribe((data: any) => {
      console.log(data);
      this.artistas = data;
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

  verArtistaSearch(item: any) {
    let idArtist;

    if (item.type == 'artist') {
      idArtist = item.id;
    } else {
      idArtist = item.artist[0].id;
    }
    console.log('idArtist:', idArtist);

    this.router.navigate(['artist/', idArtist]);
  }
}
