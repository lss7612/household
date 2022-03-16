function InputForm(prop) {
  return (
    <div className="form_div_common">
      <div className="form">
        <input id={prop.id} type="text" />
        <label htmlFor={prop.id}>{prop.label}</label>
        <span className="reason"></span>
      </div>
    </div>
  );
}

export default InputForm;
