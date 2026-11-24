import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Perfil as DadosPerfil } from '../core/auth-service';
import { CepService, Endereco } from '../core/cep-service';

@Component({
  selector: 'app-perfil',
  imports: [FormsModule],
  templateUrl: './perfil.html'
})
export class Perfil implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly cepService = inject(CepService);
  private readonly router = inject(Router);

  dados: DadosPerfil | null = null;
  erroPerfil = '';

  cep = '';
  endereco: Endereco | null = null;
  cepNaoEncontrado = false;
  buscandoCep = false;

  ngOnInit(): void {
    this.auth.perfil().subscribe({
      next: (perfil) => {
        this.dados = perfil;
      },
      error: () => {
        this.erroPerfil = 'Não foi possível carregar o perfil.';
      }
    });
  }

  buscarCep(): void {
    const digitos = this.cep.replace(/\D/g, '');
    if (digitos.length !== 8) {
      this.cepNaoEncontrado = true;
      this.endereco = null;
      return;
    }

    this.buscandoCep = true;
    this.cepNaoEncontrado = false;
    this.endereco = null;

    this.cepService.buscar(digitos).subscribe({
      next: (resultado) => {
        this.buscandoCep = false;
        if (!resultado) {
          this.cepNaoEncontrado = true;
          return;
        }
        this.endereco = resultado;
      },
      error: () => {
        this.buscandoCep = false;
        this.cepNaoEncontrado = true;
      }
    });
  }

  sair(): void {
    this.auth.sair();
    this.router.navigate(['/entrar']);
  }
}