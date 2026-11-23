import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumo',
  standalone: true
})
export class ResumoPipe implements PipeTransform {
  transform(valor: string | null | undefined, limite = 30): string {
    if (!valor || !valor.trim()) return '';
    if (valor.length <= limite) return valor;

    const palavras = valor.trim().split(/\s+/);
    let resumo = palavras[0];
    for (const palavra of palavras.slice(1)) {
      const candidato = `${resumo} ${palavra}`;
      if (candidato.length > limite) break;
      resumo = candidato;
    }
    return `${resumo}…`;
  }
}