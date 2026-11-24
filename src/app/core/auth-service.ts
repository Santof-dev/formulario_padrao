import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export const API_URL = 'https://dummyjson.com';
const CHAVE_TOKEN = 'token';

export interface RespostaLogin {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
}

export interface Perfil {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);

  entrar(usuario: string, senha: string): Observable<RespostaLogin> {
    return this.http
      .post<RespostaLogin>(`${API_URL}/auth/login`, {
        username: usuario,
        password: senha
      })
      .pipe(tap((res) => localStorage.setItem(CHAVE_TOKEN, res.accessToken)));
  }

  perfil(): Observable<Perfil> {
    return this.http.get<Perfil>(`${API_URL}/auth/me`);
  }

  token(): string | null {
    return localStorage.getItem(CHAVE_TOKEN);
  }

  sair(): void {
    localStorage.removeItem(CHAVE_TOKEN);
  }
}