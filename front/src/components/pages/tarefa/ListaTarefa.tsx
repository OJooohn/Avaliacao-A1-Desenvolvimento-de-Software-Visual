import React, { useEffect, useState } from 'react';
import { Tarefa } from '../../interfaces/Tarefa';
import { Link } from 'react-router-dom';
import './ListaTabela.css'

function ListaTarefa() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    const fetchTarefas = () => {
        fetch('http://localhost:5000/api/tarefas/listar')
        .then(resposta => {
            return resposta.json();
        })
        .then(tarefas => {
            // console.log(tarefas);
            setTarefas(tarefas);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }

    useEffect( () => {
        fetchTarefas();
    });

    function alterarStatus (tarefaId : number)  {
        fetch(`http://localhost:5000/api/tarefas/alterar/${tarefaId}`, 
        {
            method : 'PUT'
        })
        .then(resposta => {
            return resposta.json();
        })
        .then(tarefas => {
            fetchTarefas();
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }

    return(
        <div className='lista-tabela'>
            <h1>Lista Tarefa</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Criado Em</th>
                        <th>Categoria</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map(tarefa => ( 
                        <tr key={tarefa.tarefaId}>
                            <td>{tarefa.tarefaId}</td>
                            <td>{tarefa.titulo}</td>
                            <td>{tarefa.descricao}</td>
                            <td>{tarefa.criadoEm ? new Date(tarefa.criadoEm).toLocaleDateString() : 'N/A'}</td>
                            <td>{tarefa.categoria?.nome}</td>
                            <td>{tarefa.status}</td>
                            <td>
                                <button formMethod='PUT' onClick={() => tarefa.tarefaId && alterarStatus(tarefa.tarefaId)}>Alterar Status</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaTarefa;