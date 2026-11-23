import { IniciaisPipe } from './iniciais-pipe';

describe('IniciaisPipe', () => {
  const pipe = new IniciaisPipe();

  it('usa a primeira letra do primeiro e do último nome', () => {
    expect(pipe.transform('Maria da Silva Santos')).toBe('MS');
  });

  it('ignora espaços excedentes, conectivos e caixa baixa', () => {
    expect(pipe.transform(' joão guedes de brito ')).toBe('JB');
  });

  it('trata um nome só', () => {
    expect(pipe.transform('Ana')).toBe('A');
  });

  it('trata o nome vazio', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform('   ')).toBe('');
  });
});