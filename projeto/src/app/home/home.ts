import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
// Atributo => Variável de uma classe
  public nome = '';
// Criando uma lista de atividades
public lista = [
    {id: 1, nome:"Dormir"},
    {id: 1, nome:"Tomar Remédio"}
  ];

  cancelar(): void {
    this.nome = '';
  }
}
