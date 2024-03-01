import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

import User from "../pages/User";
import { MultiTodo } from "./TodoLayout";
import { WidgetLayoutWide } from "../layout/WidgetLayoutSmall";
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
      const newContainerId = containerName;
      const newContainers = [
        ...todoContainers,
        { id: newContainerId, name: containerName },
      ];
      setTodoContainers(newContainers);
      localStorage.setItem("todoContainers", JSON.stringify(newContainers));
      setModal(false);
      setContainerName("");
    }
  };
  let test = [
    {
      a: "aaaaaa",
      b: "bbbbb",
    },
  ];
  const user = [...test];
  return (
    <>
      <section className="container">
        <WidgetLayoutWide>
          <div className="first">
            <User user={user} />
          </div>
        </WidgetLayoutWide>
        <WidgetLayoutWide style={{ position: "relative" }}>
          <section className="second">
            <section className="source">
              <GitHubCalendar
                username="rosaceaee"
                year="2024"
                colorScheme="light"
              />
            </section>
          </section>
          <h1 className="repo-header">작업 계획</h1>{" "}
          <div>
            {" "}
            {modal && (
              <>
                <div className="add-modal-wrap">
                  <input
                    type="text"
                    value={containerName}
                    onChange={handleInputChange}
                    placeholder="이름 추가 입력"
                  />
                  <button onClick={handleAddContainerConfirm}>추가</button>
                </div>
              </>
            )}
            <button className="addRepo" onClick={handleAddTodoContainer}>
              레포 추가
            </button>
          </div>
          <div className="todo-wrap">
            {todoContainers.map((container) => (
              <TodoContainer key={container.id} container={container} />
            ))}
          </div>
        </WidgetLayoutWide>
      </section>
    </>
  );
};

export default LayT;
