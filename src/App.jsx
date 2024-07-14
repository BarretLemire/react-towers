import React, { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import Tower from "./Tower";
import "./App.css";

function App() {
  const [towers, setTowers] = useState([[6, 5, 4, 3, 2, 1], [], []]);

  const moveDisk = (from, to) => {
    const newTowers = [...towers];
    const disk = newTowers[from][newTowers[from].length - 1];

    if (newTowers[to].length > 0 && newTowers[to][newTowers[to].length - 1] < disk) {
      alert("You can't place a larger disk atop a smaller one.");
      return;
    }

    newTowers[from].pop();
    newTowers[to].push(disk);
    setTowers(newTowers);

    if (newTowers[2].length === 6 && newTowers[2].join() === "6,5,4,3,2,1") {
      alert("Congratulations. You won.");
    }
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
