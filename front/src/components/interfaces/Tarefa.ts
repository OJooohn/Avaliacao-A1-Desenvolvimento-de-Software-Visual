import { Categoria } from "./Categoria";

export interface Tarefa {
    tarefaId? : number;
    titulo : string;
    descricao : string;
    criadoEm? : Date;
    categoriaId : number;
    categoria? : Categoria;
    status? : string;
}