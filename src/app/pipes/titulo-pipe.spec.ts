import { TituloPipe } from './titulo-pipe';

describe('TituloPipe', () => {
  const pipe = new TituloPipe();

  it('mantém palavras de ligação minúsculas', () => {
    expect(pipe.transform('semana de tecnologia da unijorge')).toBe('Semana de Tecnologia da Unijorge');
  });

  it('capitaliza a primeira palavra mesmo quando é uma ligação', () => {
    expect(pipe.transform('DE VOLTA AO CAMPUS')).toBe('De Volta ao Campus');
  });

  it('trata entrada só com espaços', () => {
    expect(pipe.transform(' ')).toBe('');
  });
});