import { MascaraEmailPipe } from './mascara-email-pipe';

describe('MascaraEmailPipe', () => {
  const pipe = new MascaraEmailPipe();

  it('mascara o usuário e mantém o domínio', () => {
    expect(pipe.transform('joao.silva@gmail.com')).toBe('jo********@gmail.com');
  });

  it('preserva endereços sem formato válido e trata vazios', () => {
    expect(pipe.transform('sem-arroba')).toBe('sem-arroba');
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null)).toBe('');
  });
});