import React from 'react';
import './formContact.css';

export default function ComponentsRepeated() {
  return (
    <div className='form'>
      <form id='form-contact'>
        <label htmlFor='nome'>Nome</label>
        <input type='text' id='nome' />
        <label htmlFor='E-mail'>E-mail</label>
        <input type='text' id='E-mail' />
        <label htmlFor='Telefone'>Telefone</label>
        <input type='text' id='Telefone' />
        <label htmlFor='Mensagem'>Mensagem</label>
        <textarea id='Mensagem' style={{}}></textarea>
        <button type='submit' className='btn btn-form-contact'>
          Enviar
        </button>
      </form>
    </div>
  );
}
