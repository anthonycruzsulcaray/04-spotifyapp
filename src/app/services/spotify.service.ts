import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Servicio listo de spotify');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAUVtqnYkIo1UoBFYS0IZuKV2dPKsPJy9aWJOPyTPSFYz-osUEnvqn215ff6IJWefZv1s4YS7b8aGqmpL6qEm2qgmivcl9DWEnA_XNPNTeHg_xzU3s',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
}
