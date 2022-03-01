import { useEffect, useState } from "react";

function Test() {
  function getList() {
    fetch("/test")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setList(json);
      });
  }
  const [list, setList] = useState(new Array());
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <ul>
        {list.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Test;
