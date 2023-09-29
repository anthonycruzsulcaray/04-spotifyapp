import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Servicio listo de spotify');
  }

  token: string =
    'BQACaGn_cGzo5vPjj9ex-EbYyjz8_N44hnB7wTbjJyatyQaRfvQ7Nm9sxRNCJJW0lXbopj-YaGpBqZ3UhtUO9jESit9eTRPuUoVEBtONXsje8823Rf0';

  getNewReleases(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });

    return this.http
      .get('https://api.spotify.com/v1/browse/new-releases?limit=20', {
        headers,
      })
      .pipe(
        map((response: any) => {
          // Extraer el campo 'items' de la respuesta
          return response.albums.items;
        })
      );
  }

  getArtistas(keyword: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });
    return this.http
      .get(
        'https://api.spotify.com/v1/search?q=' +
          keyword +
          '&type=artist&limit=20',
        { headers }
      )
      .pipe(
        map((response: any) => {
          return response.artists.items;
        })
      );
  }

  getArtista(idArtist: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });
    return this.http.get(`https://api.spotify.com/v1/artists/${idArtist}`, {
      headers,
    });
  }
}
