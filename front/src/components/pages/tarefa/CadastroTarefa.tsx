import React, { useState } from 'react';
import { Tarefa } from '../../interfaces/Tarefa';
import './CadastroTarefa.css'
import './ListaTabela.css'

function CadastroTarefa() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriaId, setCategoriaId] = useState(0);

    function criarTarefa(e : any) {
        e.preventDefault();

        const tarefa : Tarefa = {
            titulo : titulo,
            descricao : descricao,
            categoriaId : categoriaId
        };

        fetch('http://localhost:5000/api/tarefas/cadastrar', 
        {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(tarefa)
        })
        .then(resposta => {
            if (!resposta.ok) {
                alert('Erro ao cadastrar tarefa');
                throw new Error('Erro ao cadastrar tarefa');
            }
            return resposta.json();
        })
        .then(data => {
            alert('Cadastro realizado com sucesso');
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }

    return(
        <div>
            <div className='form-tarefa'>
                <h1>Cadastrar Tarefa</h1>
                <form onSubmit={criarTarefa}>
                    <label htmlFor='titulo'>Título:</label>
                    <input type='text' id='titulo' name='titulo' required
                    onChange={(e : any) => {setTitulo(e.target.value)}}/>

                    <label htmlFor='descricao'>Descrição:</label>
                    <input type='text' id='descricao' name='descricao' required
                    onChange={(e : any) => {setDescricao(e.target.value)}}/>

                    <label htmlFor='categoriaId'>Categoria:</label>
                    <select onChange={(e : any) => {setCategoriaId(e.target.value)}}>
                        <option value="39be53a2-fc09-4b6a-bafa-18a6a23c8f6e">Lazer</option>
                        <option value="6d091456-5a2f-4b5a-98fc-f1a3b50a627d">Estudos</option>
                        <option value="bfe4e7dc-81e4-4e47-a67b-d4fbf3e124bd">Trabalho</option>
                    </select>

                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default CadastroTarefa;