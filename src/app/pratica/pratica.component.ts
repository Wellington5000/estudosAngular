import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pratica',
  templateUrl: './pratica.component.html',
  styleUrls: ['./pratica.component.scss']
})
export class PraticaComponent{
  @Output() aoTransferir = new EventEmitter<any>()

  valor: number
  destino: number

  transferir(){
    this.aoTransferir.emit({valor: this.valor, destino: this.destino})
  }
}
