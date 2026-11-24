import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth-service';

@Component({
  selector: 'app-entrar',
  imports: [FormsModule],
  templateUrl: './entrar.html'
})
export class Entrar {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  usuario = '';
  senha = '';
  erro = '';
  carregando = false;

  onSubmit(): void {
    this.erro = '';
    this.carregando = true;

    this.auth.entrar(this.usuario.trim(), this.senha).subscribe({
      next: () => {
        this.carregando = false;
        this.router.navigate(['/perfil']);
      },
      error: () => {
        this.carregando = false;
        this.erro = 'Usuário ou senha inválidos.';
      }
    });
  }
}