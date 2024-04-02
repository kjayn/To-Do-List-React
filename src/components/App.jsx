import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleOnChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, { text: inputText, completed: false }];
    });
    setInputText("");
  }

  function toggleItem(index) {
    setItems((prevItems) => {
      const newItems = prevItems.map((item, i) => {
        if (i === index) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });

      const listItems = document.querySelectorAll("ul li");
      listItems[index].style.textDecoration = newItems[index].completed
        ? "line-through"
        : "none";

      return newItems;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleOnChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => toggleItem(index)}
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
