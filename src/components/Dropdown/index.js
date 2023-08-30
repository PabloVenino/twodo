import './Dropdown.css';

export const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>
        {props.label}
      </label>
      <select 
        key={props.value.key}
        value={props.value.item}
        onChange={props.onChange}
      >
        {props.itens.map(item => <option key={item.id}>{item.name}</option>)}
      </select>
    </div>
  );
};
