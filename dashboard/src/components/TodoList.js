import React, { useState, useEffect } from "react";

export const TodoList = ({ todoname }) => {
  const [list, setList] = useState("");
  const [addList, setAddList] = useState([]);
  const [line, setLine] = useState(false);
  const [todoData, setTodoData] = useState(addList);

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
    // Retrieve Todo list data from localStorage
    const storedData = JSON.parse(localStorage.getItem("todoData"));
    console.log("Stored Data:", storedData); // Log the stored data
    if (storedData) {
      setAddList(storedData); // Initialize state with fetched data
    }
  }, []);
  useEffect(() => {
    setTodoData(addList); // Make sure todoData is updated with addList
  }, [addList]);

  useEffect(() => {
    if (todoData.length > 0) {
      localStorage.setItem("todoData", JSON.stringify(todoData));
    } else if ((todoData.length = 0)) {
      return;
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
