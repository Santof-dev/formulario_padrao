import { ResumoPipe } from './resumo-pipe';

describe('ResumoPipe', () => {
  const pipe = new ResumoPipe();
  const descricao = 'Semana de Tecnologia da Unijorge com palestras e oficinas';

  it('usa o limite padrão sem partir palavras', () => {
    expect(pipe.transform(descricao)).toBe('Semana de Tecnologia da…');
  });

  it('aceita um limite informado', () => {
    expect(pipe.transform(descricao, 40)).toBe('Semana de Tecnologia da Unijorge com…');
  });

  it('não adiciona reticências se o texto já cabe', () => {
    expect(pipe.transform('Evento')).toBe('Evento');
  });

  it('trata o texto vazio', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform('   ')).toBe('');
  });
});