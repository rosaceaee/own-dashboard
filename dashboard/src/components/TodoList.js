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
    if (list.trim() === "") {
      return;
    }

    setAddList((prevList) => [...prevList, { task: list, completed: false }]);
    setList("");
  };

  const onCheckedElement = (checked, item) => {
    setAddList((prevList) =>
      prevList.map((el) =>
        el.task === item.task ? { ...el, completed: checked } : el
      )
    );
  };

  const onRemove = (item) => {
    setAddList((prevList) => prevList.filter((el) => el.task !== item.task));
  };

  return (
    <>
      <h1>Todo List</h1>
      <div>
        <ul>
          {addList.map((item, index) => (
            <li key={index} className={item.completed ? "completed" : ""}>
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                onChange={(e) => onCheckedElement(e.target.checked, item)}
                checked={item.completed}
              />
              <label htmlFor={`checkbox-${index}`}>{item.task}</label>
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
        <input
          type="text"
          placeholder="input"
          value={list}
          onChange={onChange}
        />
        <button type="submit">추가쓰</button>
      </form>
    </>
  );
};
