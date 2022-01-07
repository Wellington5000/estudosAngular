import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PraticaService {
  private url = 'http://localhost:3000/transferencias'
  constructor(private httpClient: HttpClient) { }

  buscar(){
    return this.httpClient.get(this.url)
  }
}
