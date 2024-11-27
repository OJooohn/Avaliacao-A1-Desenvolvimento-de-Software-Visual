import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import CadastroTarefa from './components/pages/tarefa/CadastroTarefa';
import ListaTarefa from './components/pages/tarefa/ListaTarefa';
import ListaTarefaNaoConluida from './components/pages/tarefa/ListaTarefaNaoConluida';
import ListaTarefaConcluida from './components/pages/tarefa/ListaTarefaConcluida';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/pages/tarefa/cadastrar">Cadastrar Tarefa</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/listar">Listar Tarefa</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/naoconcluidas">Listar Não Concluídas</Link>
            </li>
            <li>
              <Link to="/pages/tarefa/concluidas">Listar Concluídas</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/pages/tarefa/cadastrar' element={<CadastroTarefa />}></Route>
          <Route path='/pages/tarefa/listar' element={<ListaTarefa />}></Route>
          <Route path='/pages/tarefa/naoconcluidas' element={<ListaTarefaNaoConluida />}></Route>
          <Route path='/pages/tarefa/concluidas' element={<ListaTarefaConcluida />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;