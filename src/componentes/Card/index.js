import './Card.css';

const Card = ({ nome, raca, imagem, pet, corFundo }) => {
  return (
    <div className="card">
      <div className="cabecalho" style={{ backgroundColor: corFundo }}>
        <h4>{pet}</h4>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{raca}</h5>
      </div>
    </div>
  );
};

export default Card;
