import React, { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState("");
  const [addList, setAddList] = useState([]);

  const onChange = (e) => {
    const ee = e.target.value;
    setList(ee);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (addList === "") {
      return;
    }
    console.log(addList);

    setAddList((zz) => [list, ...zz]);
    setList("");
  };

  return (
    <>
      <h1>zz</h1>
      {/*<h1 onChange={onChange} />*/}
      <div>
        <ul>
          {addList.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="input" onChange={onChange} />
        <button type="submit">추가쓰</button>
      </form>
    </>
  );
};
