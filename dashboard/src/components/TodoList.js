import { useTodoContext } from "./TodoContext";
import { useEffect, useState } from "react";

export const TodoList = ({ todoname }) => {
  const [list, setList] = useState("");
  const [addList, setAddList] = useState([]);
  const { todoData, setTodoData } = useTodoContext();
  const localStorageKey = `todoData-${todoname}`;

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

  const onCheckedElement = (checked, item) => {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const updatedData = storedData.filter((el) => el.task !== item.task);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));

    // 화면에서 체크박스를 사라지게 하기 위해 상태 업데이트
    setAddList((prevList) => prevList.filter((el) => el.task !== item.task));
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
