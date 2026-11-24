import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css'
})
export class Pessoa {
  nome = 'Maria Eduarda';
  curso = 'Engenharia de Computação';
  email = 'maria@exemplo.com';
}