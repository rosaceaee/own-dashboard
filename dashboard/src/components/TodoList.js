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
    if (addList === "") {
      return;
    }
    console.log(addList);
    setAddList((zz) => [list, ...zz]);
    // setAddList((zz) => [{ task: list, completed: false }, ...zz]);

    setList("");
  };

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setAddList([...addList, item]);
    } else if (!checked) {
      setAddList(addList.filter((el) => el !== item));
    }
  };

  const handleCheckboxChange = (index) => {
    const newList = addList.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setAddList(newList);
  };

  const removeit = (index) => {
    const newList = addList.filter((item, i) => i !== index);
    console.log(newList);
    setAddList(newList);
  };

  return (
    <>
      <h1>zz</h1>
      {/*<h1 onChange={onChange} />*/}
      <div>
        <ul>
          {addList.map((item, key) => {
            return (
              <li key={key}>
                <input
                  type="checkbox"
                  value={item}
                  id={item}
                  onChange={(e) => {
                    onCheckedElement(e.target.checked, e.target.value);
                  }}
                  checked={addList.includes(item) ? true : false}
                />{" "}
                <label for={item}>{item}</label>
                <button
                  onClick={() => {
                    removeit();
                  }}
                >
                  {" "}
                  다했슈{" "}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="input" onChange={onChange} />
        <button type="submit">추가쓰</button>
      </form>
    </>
  );
};
