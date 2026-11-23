import { DiasParaPipe } from './dias-para-pipe';

describe('DiasParaPipe', () => {
  const pipe = new DiasParaPipe();
  const hoje = new Date(2026, 10, 10);

  it('identifica hoje', () => {
    expect(pipe.transform('2026-11-10', hoje)).toBe('Hoje');
  });

  it('identifica amanhã', () => {
    expect(pipe.transform('2026-11-11', hoje)).toBe('Amanhã');
  });

  it('conta os dias até o evento', () => {
    expect(pipe.transform('2026-11-20', hoje)).toBe('Faltam 10 dias');
    expect(pipe.transform('2026-12-01', hoje)).toBe('Faltam 21 dias');
  });

  it('identifica datas encerradas', () => {
    expect(pipe.transform('2026-11-09', hoje)).toBe('Encerrado');
  });

  it('trata a data vazia ou inválida', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform('2026-02-30', hoje)).toBe('');
  });
});