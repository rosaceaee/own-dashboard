import React, { useState, useEffect } from "react";
import TodoContainer from "./TodoContainer";

const LayT = () => {
  const [todoContainers, setTodoContainers] = useState([]);
  const [modal, setModal] = useState(false);
  const [containerName, setContainerName] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("todoContainers"));
    if (storedData) {
      setTodoContainers(storedData);
    }
  }, []);

  const handleInputChange = (e) => {
    setContainerName(e.target.value);
  };

  const handleAddTodoContainer = () => {
    setModal(true);
  };

  const handleAddContainerConfirm = () => {
    if (containerName.trim() !== "") {
      const newContainerId = containerName; // Unique ID for each container
      const newContainers = [
        ...todoContainers,
        { id: newContainerId, name: containerName },
      ];
      setTodoContainers(newContainers);
      localStorage.setItem("todoContainers", JSON.stringify(newContainers)); // Save to localStorage
      setModal(false);
      setContainerName("");
    }
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <button onClick={handleAddTodoContainer}>레포 추가</button>
        {modal && (
          <>
            <div>
              <input
                type="text"
                value={containerName}
                onChange={handleInputChange}
                placeholder="이름 추가 입력"
              />
              <button onClick={handleAddContainerConfirm}>Add</button>
            </div>
          </>
        )}
      </div>
      <hr />
      {todoContainers.map((container) => (
        <TodoContainer key={container.id} container={container} />
      ))}
    </>
  );
};

export default LayT;
