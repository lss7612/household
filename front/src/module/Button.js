function Button({ name, onClick }) {
  return (
    <div className="form_div_common">
      <div className="form">
        <button className="positive" onClick={onClick}>
          {name}
        </button>
      </div>
    </div>
  );
}

export default Button;
