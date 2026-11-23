import { Pipe, PipeTransform } from '@angular/core';

export type FormaPagamento = 'pix' | 'cartao' | 'boleto' | 'dinheiro' | '';

const ROTULOS: Record<FormaPagamento, string> = {
  pix: 'Pix',
  cartao: 'Cartão de crédito',
  boleto: 'Boleto',
  dinheiro: 'Dinheiro',
  '': 'Não informado'
};

@Pipe({
  name: 'formaPagamento',
  standalone: true
})
export class FormaPagamentoPipe implements PipeTransform {
  transform(valor: FormaPagamento | string | null | undefined): string {
    if (valor === null || valor === undefined || valor === '') return ROTULOS[''];

    return ROTULOS[valor as FormaPagamento] ?? valor;
  }
}