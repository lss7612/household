function Button({ name, onClick }) {
  return (
    <div className="form">
      <button className="positive" onClick={onClick}>
        {name}
      </button>
    </div>
  );
}

export default Button;
