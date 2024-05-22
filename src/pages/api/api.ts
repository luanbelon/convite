import axios, { AxiosInstance } from 'axios';

export interface Evento {
  evento: number;
  titulo: string;
  endereco: string;
  data: string;
  horario: string;
  cor_principal: string;
  cor_secundaria: string;
  link_lista: string;
  capa: string;
}

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://sistema.tecnodam.com.br',
  timeout: 100000,
});

export const getEventos = async (): Promise<Evento[]> => {
  try {
    const response = await apiClient.get<Evento[]>('/Evento/evento.rule?sys=EVT');
    return response.data;
  } catch (error: any) {
    console.error('Erro ao buscar eventos:', error.response ? error.response.data : error.message);
    throw error;
  }
};