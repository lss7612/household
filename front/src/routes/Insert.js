import InsertCard from "../module/InsertCard";

function Insert() {
  return (
    <div className="article">
      <h1>Insert</h1>
      <ul>
        <li>금액 insert</li>
        <li>카드 or 현금 >> 카드면 무슨카드?</li>
        <li>대분류</li>
        <li>코멘트</li>
      </ul>
      <InsertCard />
    </div>
  );
}

export default Insert;
