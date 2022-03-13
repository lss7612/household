function SelectFrom({ id, label, valid, reason }) {
  return (
    <div className="form">
      <select id={id} className={valid ? null : "not_valid"} type="select">
        <option>testing</option>
        <option>testing2</option>
      </select>
      <label htmlFor={id}>{label}</label>
      <span className="reason">{reason}</span>
    </div>
  );
}

export default SelectFrom;
