import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mascaraEmail',
  standalone: true
})
export class MascaraEmailPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';

    const separador = valor.lastIndexOf('@');
    if (separador < 0 || separador === valor.length - 1) return valor;

    const usuario = valor.slice(0, separador);
    const dominio = valor.slice(separador + 1);
    return `${usuario.slice(0, 2)}${'*'.repeat(Math.max(0, usuario.length - 2))}@${dominio}`;
  }
}