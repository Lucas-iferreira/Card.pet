import CampoTexto from '../CampoTexto/Index';
import Selecao from '../Selecao';
import './Formulario.css';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = props => {
  const [nome, setNome] = useState('');
  const [raca, setRaca] = useState('');
  const [imagem, setImagem] = useState('');
  const [pet, setPet] = useState('');
  const [grupo, setGrupo] = useState('');

  const escutar = evento => {
    evento.preventDefault();
    props.aoAnimalCadastrado({
      nome,
      raca,
      imagem,
      pet,
      grupo,
    });
    setNome('');
    setRaca('');
    setImagem('');
    setPet('');
    setGrupo('');
  };

  return (
    <section className="formulario">
      <form onSubmit={escutar}>
        <h1>Preencha os dados para criar o card do seu Pet</h1>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do seu Pet"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Raça"
          placeholder="Digite a raça do seu Pet"
          valor={raca}
          aoAlterado={valor => setRaca(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <Selecao
          label="Qual o seu Pet:"
          valor={pet}
          aoAlterado={valor => setPet(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Qual o porte?"
          itens={props.grupos}
          valor={grupo}
          aoAlterado={valor => setGrupo(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
export default Formulario;
