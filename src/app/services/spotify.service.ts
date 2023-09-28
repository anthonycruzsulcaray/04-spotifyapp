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
    'BQBqhmep2As4XEEzdC5V8Kb4ARn5C_Uifc8Qpwcjx2zSRwVX9QPJNmv3TgWTWfDdlZUI_2SbDe9C9YN7pdAsDqSOdQ2pF8qJK9JuISz11QYY-koG_gE';

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

  getArtista(keyword: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token,
    });

    return this.http
      .get(
        'https://api.spotify.com/v1/search?q=' +
          keyword +
          '&type=artist&limit=20',
        {
          headers,
        }
      )
      .pipe(
        map((response: any) => {
          return response.artists.items;
        })
      );
  }
}
