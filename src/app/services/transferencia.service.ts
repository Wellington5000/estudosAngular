import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia)
    this.transferencias.push(transferencia)
  }

  hidratar(transferencia: any){
    transferencia.data = new Date()
  }
}
