import React, { useEffect, useState } from 'react';
import { Tarefa } from '../../interfaces/Tarefa';
import './ListaTabela.css'

function ListaTarefaConcluida() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect( () => {
        fetch('http://localhost:5000/api/tarefas/concluidas')
        .then(resposta => {
            return resposta.json();
        })
        .then(tarefas => {
            setTarefas(tarefas);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });

    return(
        <div className='lista-tabela'>
            <h1>Lista Tarefa Conluída</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Criado Em</th>
                        <th>Categoria</th>
                        <th>Status</th>
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListaTarefaConcluida;