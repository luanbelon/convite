import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Faça a requisição à API externa
    const response = await axios.get('https://evento.tecnodam.com.br/Evento/evento.rule?sys=EVT');

    // Retorne os dados recebidos da API externa na resposta da API Next.js
    res.status(200).json(response.data);
  } catch (error) {
    // Trate erros adequadamente
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer a requisição à API externa' });
  }
};

export default handler;
