import './InputField.css'

export const InputField = (props) => {
  return (
    <div className='inputField'>
      <label>
        {props.label}
      </label>
      <input 
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
}