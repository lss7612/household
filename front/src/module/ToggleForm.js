function ToggleForm({ left, right }) {
  return (
    <div className="form">
      <div className="switch_name">
        <span>{left}</span>
        <span>{right}</span>
      </div>
      <div className="switch_box on">
        <div className="switch"></div>
      </div>
    </div>
  );
}

export default ToggleForm;
