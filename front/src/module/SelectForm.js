function SelectFrom({ id, label, valid, reason }) {
  return (
    <div className="form_div_common">
      <div className="form">
        <select id={id} className={valid ? null : "not_valid"} type="select">
          <option>testing</option>
          <option>testing2</option>
        </select>
        <label htmlFor={id}>{label}</label>
        <span className="reason">{reason}</span>
      </div>
    </div>
  );
}

export default SelectFrom;
