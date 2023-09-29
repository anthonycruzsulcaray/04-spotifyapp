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
    'BQAGTzlOWe90qOjnUrgA98A8F1h4FT-L24KbFF4THRF1rIPFMkdDIg_tefSCmf2RzhR2pL341ydPEaB2erYr97lNr3dDT66mXOB2WQ2gAnrIGpgF4Xk';

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
