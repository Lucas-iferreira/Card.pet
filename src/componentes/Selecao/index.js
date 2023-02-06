import './Selecao.css';

const Selecao = props => {
  return (
    <div className="selecao">
      <label>{props.label}</label>
      <input
        valor={props.valor}
        onChange={evento => props.aoAlterado(evento.target.value)}
        type="radio"
        name="animal"
        value="Gato"
      />
      Gato
      <br />
      <input
        valor={props.valor}
        onChange={evento => props.aoAlterado(evento.target.value)}
        type="radio"
        name="animal"
        value="Cachorro"
      />
      Cachorro
    </div>
  );
};
export default Selecao;
