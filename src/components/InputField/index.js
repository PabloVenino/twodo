import './InputField.css'

export const InputField = (props) => {

  return (
    <div className='inputField'>
      <label>
        {props.label}
      </label>
      <input placeholder={props.placeholder} type={props.type}/>
    </div>
  );
} 