import React, { useState } from "react";

export const TodoList = () => {
  const [list, setList] = useState("");
  const [addList, setAddList] = useState([]);
  const [line, setLine] = useState(false);

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
    // setAddList((zz) => [{ task: list, completed: false }, ...zz]);

    setList("");
  };

  const onCheckedElement = (checked, item) => {
    if (checked) {
      // If checked, remove the item from addList
      setAddList((prevList) => prevList.filter((el) => el !== item));
    } else {
      // If unchecked, add the item to addList
      setAddList((prevList) => [...prevList, item]);
    }
  };
  const handleCheckboxChange = (index) => {
    const newList = addList.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setAddList(newList);
  };

  const onRemove = (item) => {
    setAddList(addList.filter((el) => el !== item));
  };
  return (
    <>
      <h1>zz</h1>
      {/*<h1 onChange={onChange} />*/}
      <div>
        <ul>
          {addList.map((item, index) => (
            <li key={index}>
              <input
                type="checkbox"
                value={item}
                id={`checkbox-${index}`}
                onChange={(e) => onCheckedElement(e.target.checked, item)}
                checked={addList.includes(item)}
              />
              <label htmlFor={`checkbox-${index}`}>{item}</label>
              <button
                onClick={() => {
                  onRemove(item);
                }}
              >
                다했슈
              </button>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="input" onChange={onChange} />
        <button type="submit">추가쓰</button>
      </form>
    </>
  );
};
