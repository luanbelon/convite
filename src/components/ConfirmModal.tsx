// components/ConfirmModal.tsx
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

interface ConfirmModalProps {
    show: boolean;
    handleClose: () => void;
    corPrincipal: string;
    eventoId: number;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ show, handleClose, corPrincipal, eventoId }) => {
  const [formData, setFormData] = useState({
    nome: '',
    qtd_adulto: 0,
    qtd_crianca: 0,
    celular: '',
    recado: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://evento.tecnodam.com.br/Evento/convidado.rule?sys=EVT', {
        evento: eventoId,
        ...formData
      });

      console.log(response.data); // Você pode fazer algo com a resposta, como exibir uma mensagem de sucesso
    } catch (error) {
      console.error(error);
      // Trate o erro conforme necessário, como exibir uma mensagem de erro para o usuário
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton style={{ backgroundColor: corPrincipal, color: '#fff' }}>
        <Modal.Title >Preencha o formulário e confirme sua presença!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} />
            </div>
            <div>
                <div>
                    <label htmlFor="qtd_adulto">Quantidade de Adultos</label>
                    <input type="number" name="qtd_adulto" id="qtd_adulto" value={formData.qtd_adulto} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="qtd_crianca">Quantidade de crianças</label>
                    <input type="number" name="qtd_crianca" id="qtd_crianca" value={formData.qtd_crianca} onChange={handleChange} />
                </div>
            </div>
            <div>
                <label htmlFor="celular">Celular</label>
                <input type="tel" name="celular" id="celular" value={formData.celular} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="recado">Recado</label>
                <textarea name="recado" id="recado" value={formData.recado} onChange={handleChange}></textarea>
            </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button variant="primary" type="submit">
              Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmModal;
