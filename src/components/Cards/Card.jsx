import colosseoPost from "../../../public/img/colosseo.jpg";

const Card = () => {
  return (
    <div className="post-card">
      <figure className="post-card-image">
        <img src={colosseoPost} alt="Post" />
      </figure>
      <div className="post-card-content">
        <h2>Colosseo</h2>
        <p>
          Il Colosseo, costruito nell'80 d.C., è il più grande anfiteatro del
          mondo antico, situato nel cuore di Roma. Con una capacità di 50.000
          spettatori, ospitava giochi gladiatori e spettacoli pubblici.
          Nonostante i danni subiti nel tempo, rimane un simbolo iconico della
          città eterna e un'importante attrazione turistica.
        </p>
        <button>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
};

export default Card;
