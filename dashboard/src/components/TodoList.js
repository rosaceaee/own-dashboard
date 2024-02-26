import { useTodoContext } from "./TodoContext";
import { useEffect, useState } from "react";

export const TodoList = ({ todoname }) => {
  const [list, setList] = useState("");
  const [addList, setAddList] = useState([]);
  const { todoData, setTodoData } = useTodoContext();
  const localStorageKey = `todoData-${todoname}`;
  console.log(typeof localStorageKey);

  const onChange = (e) => {
    const ee = e.target.value;
    setList(ee);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (list.trim() === "") {
      return;
    }

    const newTask = { task: list, completed: false };
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    console.log(localStorageKey);
    const updatedData = [...storedData, newTask];

    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
    setAddList(updatedData);
    setList("");
  };

  const onRemove = (item) => {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const updatedData = storedData.filter((el) => el.task !== item.task);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
    setAddList((prevList) => prevList.filter((el) => el.task !== item.task));
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedData) {
      setAddList(storedData);
    }
  }, [localStorageKey]);

  useEffect(() => {
    setTodoData(addList);
  }, [addList, setTodoData]);
  useEffect(() => {
    console.log("addList check =>" + addList);
  }, [addList]);

  //
  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem(
        JSON.parse(localStorage.getItem(localStorageKey)),
        JSON.stringify(todoData)
      );
    }
  }, [todoData, localStorageKey]);

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
              //   onChange={(e) => onCheckedElement(e.target.checked, item)}
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
