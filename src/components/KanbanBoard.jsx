import React, { useEffect, useState } from "react";
import Column from "./Column";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";

const defaultData = {
  columns: [
    { id: uuidv4(), title: "To Do", tasks: [{ id: uuidv4(), title: "Първа задача" }] },
    { id: uuidv4(), title: "In Progress", tasks: [] },
    { id: uuidv4(), title: "Done", tasks: [] },
  ],
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(() => {
    const saved = localStorage.getItem("kanban");
    return saved ? JSON.parse(saved) : defaultData.columns;
  });

  useEffect(() => {
    localStorage.setItem("kanban", JSON.stringify(columns));
  }, [columns]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fromCol = columns.find(col => col.tasks.some(t => t.id === active.id));
    const toCol = columns.find(col => col.tasks.some(t => t.id === over.id)) || fromCol;

    const task = fromCol.tasks.find(t => t.id === active.id);
    const updatedFrom = { ...fromCol, tasks: fromCol.tasks.filter(t => t.id !== active.id) };
    const index = toCol.tasks.findIndex(t => t.id === over.id);
    const updatedTo = {
      ...toCol,
      tasks: [...toCol.tasks.slice(0, index), task, ...toCol.tasks.slice(index)],
    };

    setColumns(cols =>
      cols.map(col => {
        if (col.id === updatedFrom.id) return updatedFrom;
        if (col.id === updatedTo.id) return updatedTo;
        return col;
      })
    );
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        <SortableContext items={columns.map(c => c.id)} strategy={horizontalListSortingStrategy}>
          {columns.map((col) => (
            <Column key={col.id} column={col} setColumns={setColumns} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
