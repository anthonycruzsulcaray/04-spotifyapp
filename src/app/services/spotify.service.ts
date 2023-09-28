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
    'BQDG1Ko6X5c6kureP0c6sYls2Eg8F09MRibPQgiP4WdngQJXEwlXnj2RZJEqSNEt2LJx2YCxtJ7XAQfsQXYvF6MMiVP7vcTTnNBvYJbBRVG0dxzWTRk';

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
