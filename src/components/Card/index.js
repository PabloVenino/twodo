import "./Card.css";

export const Card = ({ taskTitle, placeTitle, endDate, primaryColor, secondaryColor }) => {
  return (
    <div className="card">
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src="https://github.com/pablovenino.png" alt="Imagem do Lugar"/>
      </div>
      <div className="footer">
        <h3 style={{ color: secondaryColor }}>{taskTitle}</h3>
        <h4 style={{ color: secondaryColor }}>{placeTitle}</h4>
        <h5>{endDate}</h5>
      </div>
    </div>
  );
};