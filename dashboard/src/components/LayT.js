import React, { useState, useEffect } from "react";
import TodoContainer from "./TodoContainer"; // TodoContainer import

const LayT = () => {
  const [todoContainers, setTodoContainers] = useState([]); // 상태 정의
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
        <button onClick={handleAddTodoContainer}>Add Todo Container</button>
        {modal && (
          <>
            <div>
              <input
                type="text"
                value={containerName}
                onChange={handleInputChange}
                placeholder="Enter Todo Container name..."
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
