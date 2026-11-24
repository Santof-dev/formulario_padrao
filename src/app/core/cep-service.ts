import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface ViaCepDTO {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean | string;
}

export interface Endereco {
  rua: string;
  bairro: string;
  cidade: string;
  uf: string;
}

@Injectable({ providedIn: 'root' })
export class CepService {
  private readonly http = inject(HttpClient);

  buscar(cep: string): Observable<Endereco | null> {
    const digitos = cep.replace(/\D/g, '');

    return this.http
      .get<ViaCepDTO>(`https://viacep.com.br/ws/${digitos}/json/`)
      .pipe(
        map((dto) =>
          dto.erro
            ? null
            : {
                rua: dto.logradouro,
                bairro: dto.bairro,
                cidade: dto.localidade,
                uf: dto.uf
              }
        )
      );
  }
}