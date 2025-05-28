import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { v4 as uuidv4 } from "uuid";

const Column = ({ column, setColumns }) => {
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setColumns(cols =>
      cols.map(c =>
        c.id === column.id ? { ...c, tasks: [...c.tasks, { id: uuidv4(), title: input }] } : c
      )
    );
    setInput("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 min-w-[300px]">
      <h2 className="text-xl font-semibold mb-2">{column.title}</h2>
      <div className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Нова задача..."
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-3 rounded">+</button>
      </div>
      <div className="flex flex-col gap-2">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
