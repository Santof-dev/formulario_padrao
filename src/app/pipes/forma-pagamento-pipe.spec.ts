import { FormaPagamentoPipe } from './forma-pagamento-pipe';

describe('FormaPagamentoPipe', () => {
  const pipe = new FormaPagamentoPipe();

  it('traduz todas as formas conhecidas', () => {
    expect(pipe.transform('pix')).toBe('Pix');
    expect(pipe.transform('cartao')).toBe('Cartão de crédito');
    expect(pipe.transform('boleto')).toBe('Boleto');
    expect(pipe.transform('dinheiro')).toBe('Dinheiro');
  });

  it('informa quando não há forma de pagamento', () => {
    expect(pipe.transform('')).toBe('Não informado');
    expect(pipe.transform(null)).toBe('Não informado');
  });

  it('preserva formas ainda não mapeadas pelo sistema', () => {
    expect(pipe.transform('transferencia')).toBe('transferencia');
  });
});