import { Pipe, PipeTransform } from '@angular/core';

const CONECTIVOS = new Set(['de', 'da', 'do', 'das', 'dos', 'e']);

@Pipe({
  name: 'iniciais',
  standalone: true
})
export class IniciaisPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor || !valor.trim()) return '';

    const partes = valor.trim().split(/\s+/).filter(parte => !CONECTIVOS.has(parte.toLowerCase()));
    if (partes.length === 0) return '';
    if (partes.length === 1) return partes[0][0].toUpperCase();

    return `${partes[0][0]}${partes[partes.length - 1][0]}`.toUpperCase();
  }
}