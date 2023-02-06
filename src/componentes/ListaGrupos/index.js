import Card from '../Card';
import './ListaGrupos.css';

const ListaGrupos = props => {
  return (
    props.animais.length > 0 && (
      <section
        className="grupo"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="grupos">
          {props.animais.map(animal => (
            <Card
              corFundo={props.corPrimaria}
              key={animal.nome}
              nome={animal.nome}
              raca={animal.raca}
              grupo={animal.grupo}
              imagem={animal.imagem}
              pet={animal.pet}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default ListaGrupos;
