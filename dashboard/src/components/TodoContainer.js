import React, { useState, useEffect, useCallback } from "react";

const TodoContainer = ({ container }) => {
  const { id, name } = container;

  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [throu, Setthrou] = useState(false);
  useEffect(() => {
    const localStorageKey = `${id}`;
    const storedData = JSON.parse(localStorage.getItem(localStorageKey));
    if (storedData) {
      setTodos(storedData);
    }
  }, [id]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== "") {
      const updatedList = [...todos, inputText];
      setTodos(updatedList);

      // 로컬 스토리지에 저장된 기존 데이터를 불러와서 업데이트된 리스트를 추가
      const localStorageKey = `${id}`;
      const storedData =
        JSON.parse(localStorage.getItem(localStorageKey)) || [];
      const updatedData = [...storedData, inputText];
      localStorage.setItem(localStorageKey, JSON.stringify(updatedData));

      setInputText("");
    }
  };

  const remove = (i) => {
    const updatedList = [...todos];
    updatedList.splice(i, 1);
    setTodos(updatedList);

    // 로컬 스토리지에 저장된 기존 데이터를 불러와서 업데이트된 리스트를 추가
    const localStorageKey = `${id}`;
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const updatedData = [...storedData];
    updatedData.splice(i, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
  };

  const eachChk = (chk) => {};

  return (
    <>
      <div className="todo-container">
        <h2 className="repo-header">{name}</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <p onClick={() => remove(index)}>remove</p>{" "}
            </li>
          ))}
        </ul>
        <div className="inputwrap">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="추가"
          />
          <button onClick={handleAddTodo}>등록</button>
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
