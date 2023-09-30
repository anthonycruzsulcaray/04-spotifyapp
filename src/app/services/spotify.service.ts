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
    'BQCXXYvvVvAqrVYdzsxcYXNrImsvx0u1yFUBpBKusUF322Zg8y1_hDQ5epf0T-u9-2Lh3FUuswFiwNMjyOgkTy0BL7AOIwQSm5k0tqSsQSnVK6i5NKU';

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

  getTopTracks(id: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });
    return this.http
      .get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`, {
        headers,
      })
      .pipe(map((response: any) => response.tracks));
  }
}
