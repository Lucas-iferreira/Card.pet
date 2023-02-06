import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulário';
import ListaGrupos from './componentes/ListaGrupos';
import Rodape from './componentes/Rodapé';

function App() {
  const grupos = [
    { nome: 'Pequeno', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { nome: 'Médio', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { nome: 'Grande', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
  ];

  const [animais, setAnimais] = useState([]);

  const aoNovoAnimalAdicionado = animal => {
    setAnimais([...animais, animal]);
  };
  return (
    <div className="App">
      <Banner />
      <Formulario
        grupos={grupos.map(grupo => grupo.nome)}
        aoAnimalCadastrado={animal => aoNovoAnimalAdicionado(animal)}
      />

      {grupos.map(grupo => (
        <ListaGrupos
          key={grupo.nome}
          nome={grupo.nome}
          corPrimaria={grupo.corPrimaria}
          corSecundaria={grupo.corSecundaria}
          animais={animais.filter(animal => animal.grupo === grupo.nome)}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
