import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
  artista: any = {};
  topTracks :any[] = [];
  loadingArtist: boolean = false;

  constructor(
    public router: ActivatedRoute,
    private sportifyService: SpotifyService
  ) {
    // CONSTRUCTOR POR DEFECTO
    this.loadingArtist = true;
    this.router.params.subscribe((params) => {
      console.log(params['id']);

      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  // METODOS
  getArtista(id: string) {
    this.loadingArtist = true;

    this.sportifyService.getArtista(id).subscribe((suscribeArtista) => {
      console.log(suscribeArtista);
      this.artista = suscribeArtista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.sportifyService.getTopTracks(id).subscribe((suscribeTopTracks) => {
      console.log(suscribeTopTracks);
      this.topTracks = suscribeTopTracks;
     
    });
  }

}
