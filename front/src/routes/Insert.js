import InsertCard from "../module/InsertCard";
import InputForm from "../module/InputForm";
import SelectForm from "../module/SelectForm";
import ToggleForm from "../module/ToggleForm";
import Button from "../module/Button";

function Insert() {
  const onClick = () => {
    alert("!");
  };

  return (
    <div className="article">
      <div className="form_wrapper">
        <ToggleForm left="신용카드" right="현금/직불" />
        <InputForm id="money" label="금액" valid={true} reason="" />
        <SelectForm
          id="category"
          label="분류"
          valid={true}
          reason=""
          options={null}
        />
        <InputForm id="comment" label="코멘트" valid={true} reason="" />
        <Button name="등록" onClick={onClick} />
      </div>
    </div>
  );
}

export default Insert;
