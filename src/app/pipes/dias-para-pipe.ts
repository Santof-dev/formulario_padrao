import { Pipe, PipeTransform } from '@angular/core';

const MILISSEGUNDOS_POR_DIA = 24 * 60 * 60 * 1000;

@Pipe({
  name: 'diasPara',
  standalone: true
})
export class DiasParaPipe implements PipeTransform {
  transform(data: string | null | undefined, hoje: Date = new Date()): string {
    if (!data) return '';

    const partes = data.split('-').map(Number);
    if (partes.length !== 3 || partes.some(Number.isNaN)) return '';

    const [ano, mes, dia] = partes;
    const dataEvento = Date.UTC(ano, mes - 1, dia);
    const dataHoje = Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const dataValida = new Date(dataEvento);
    if (dataValida.getUTCFullYear() !== ano || dataValida.getUTCMonth() !== mes - 1 || dataValida.getUTCDate() !== dia) {
      return '';
    }

    const dias = (dataEvento - dataHoje) / MILISSEGUNDOS_POR_DIA;
    if (dias < 0) return 'Encerrado';
    if (dias === 0) return 'Hoje';
    if (dias === 1) return 'Amanhã';
    return `Faltam ${dias} dias`;
  }
}