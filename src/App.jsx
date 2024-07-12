import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import Tower from "./Tower";
import "./App.css";

function App() {
  const [towers, setTowers] = useState([[6, 5, 4, 3, 2, 1], [], []]);

  const moveDisk = (from, to) => {
    const newTowers = [...towers];
    const disk = newTowers[from].pop();
    newTowers[to].push(disk);
    setTowers(newTowers);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const fromIndex = parseInt(active.data.current.towerIndex);
    const toIndex = parseInt(over.data.current.towerIndex);

    if (fromIndex !== toIndex) {
      moveDisk(fromIndex, toIndex);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Towers of Hanoi</h1>
        <DndContext onDragEnd={handleDragEnd}>
          <div className="towers">
            {towers.map((tower, index) => (
              <Tower key={index} index={index} disks={tower} />
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
}

export default App;
