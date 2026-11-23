import { Pipe, PipeTransform } from '@angular/core';

const LIGACOES = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'ao']);

@Pipe({
  name: 'titulo',
  standalone: true
})
export class TituloPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor || !valor.trim()) return '';

    return valor.trim().toLocaleLowerCase('pt-BR').split(/\s+/).map((palavra, indice) => {
      if (indice > 0 && LIGACOES.has(palavra)) return palavra;
      return `${palavra[0].toLocaleUpperCase('pt-BR')}${palavra.slice(1)}`;
    }).join(' ');
  }
}