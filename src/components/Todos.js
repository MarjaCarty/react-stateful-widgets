import React, { useState } from "react";

export default function ToDos(props) {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [itemId, setItemId] = useState(0);

  return (
    <div className="container">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.innerText}{" "}
              <button
                onClick={(e) => {
                  setItems(items.filter((task) => task.id !== item.id));
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <label htmlFor="new-todo">Add</label>
      <input
        id="new-todo"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={(e) => {
          setItemId(itemId + 1);
          setItems([...items, { id: itemId, innerText: text }]);
        }}
      >
        Add ToDo
      </button>
    </div>
  );
}
