export interface Evento {
  id: number;
  nome: string;
  data: string;
  local: string;
  vagas: number;
}

export type NovoEvento = Omit<Evento, 'id'>;

export type FormaPagamento = 'pix' | 'cartao' | 'boleto' | 'dinheiro' | '';
export type FormaDePagamento = FormaPagamento;

export interface Participante {
  id: number;
  eventoId: number;
  descricao: string;
  email: string;
  telefone: string;
  formaPagamento: FormaDePagamento;
}

export type NovoParticipante = Omit<Participante, 'id' | 'eventoId'>;

export interface DadosArmazenados {
  eventos: Evento[];
  participantes: Participante[];
}
