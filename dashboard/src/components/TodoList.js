import React, { useState, useEffect } from "react";
import { useTodoContext } from "./TodoContext";

export const TodoList = ({ todoname }) => {
  const [list, setList] = useState("");
  const [addList, setAddList] = useState([]);
  const [line, setLine] = useState(false);
  // const [todoData, setTodoData] = useState(addList);
  const { todoData, setTodoData } = useTodoContext();
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

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("todoData"));
    console.log("Stored Data:", storedData);
    if (storedData) {
      setAddList(storedData);
    }
  }, []);

  useEffect(() => {
    setTodoData(addList);
  }, [addList, setTodoData]);

  useEffect(() => {
    if (todoData.length > 0) {
      localStorage.setItem("todoData", JSON.stringify(todoData));
    }
  }, [todoData]);
  return (
    <>
      <ul className="todo-container">
        <li>
          <label>{todoname}</label>
        </li>
        {addList.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              onChange={(e) => onCheckedElement(e.target.checked, item)}
              checked={item.completed}
            />
            <label htmlFor={`checkbox-${index}`} style={{ textAlign: "left" }}>
              {item.task}
            </label>
            <button
              onClick={() => {
                onRemove(item);
              }}
            >
              완료
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일 추가하기"
          value={list}
          onChange={onChange}
        />
        <button type="submit">추가</button>
      </form>
    </>
  );
};
