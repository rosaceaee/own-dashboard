{
  /* import { useTodoContext } from "./TodoContext-old";
import { useEffect, useState } from "react";

export const TodoList = ({ todoname }) => {
  const { todoData, setTodoData } = useTodoContext();
  const [list, setList] = useState("");
  const [addList, setAddList] = useState([]);

  const localStorageKey = `todoData-${todoname}`;

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedData) {
      setAddList(storedData);
      setTodoData(storedData);
    }
  }, [localStorageKey, setTodoData]);

  const onChange = (e) => {
    const value = e.target.value;
    setList(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (list.trim() === "") {
      return;
    }

    const newTask = { task: list, completed: false };
    const updatedData = [...addList, newTask];

    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
    setAddList(updatedData);
    setTodoData(updatedData);
    setList("");
  };

  const onRemove = (item) => {
    const updatedData = addList.filter((el) => el.task !== item.task);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
    setAddList(updatedData);
    setTodoData(updatedData);
  };

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
              checked={item.completed}
              onChange={() => {
                const updatedData = addList.map((el, idx) =>
                  idx === index ? { ...el, completed: !el.completed } : el
                );
                localStorage.setItem(
                  localStorageKey,
                  JSON.stringify(updatedData)
                );
                setAddList(updatedData);
                setTodoData(updatedData);
              }}
            />
            <label htmlFor={`checkbox-${index}`} style={{ textAlign: "left" }}>
              {item.task}
            </label>
            <button onClick={() => onRemove(item)}>완료</button>
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

*/
}
