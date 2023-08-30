import "./Place.css";

export const Place = (props) => {
  return (
    <section className="places" style={{
      backgroundColor: props.secondaryColor
    }}>
      <h3 style={{
        borderColor: props.primaryColor
      }}>
        {props.title}
      </h3>
    </section>
  );
};