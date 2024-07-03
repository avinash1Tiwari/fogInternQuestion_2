


import React, { useEffect, useState } from "react";
import './RainGrid2.css';

const RainGrid = () => {
  const [grid, setGrid] = useState([]);

  const generateGrid = () => {
    let newGrid = [];
    for (let i = 0; i < 15; i++) {
      let newRow = [];
      for (let j = 0; j < 20; j++) {
        // Determine if the cell is part of a stream
        const isStreamColumn = j % 2 === 0;
        const isStreamCell = isStreamColumn && (i % 5 < 5);
        const streamClass = isStreamCell ? `rain-${(j / 2) % 3}` : '';
        newRow.push({ id: `${i}-${j}`, streamClass });
      }
      newGrid.push(newRow);
    }
    setGrid(newGrid);
  };

  useEffect(() => {
    generateGrid();
  }, []);

  return (

    
    <div className="flex justify-center items-center">
      <div className="grid">
      {grid.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              key={col.id}
              className={`cell ${col.streamClass}`}
              style={{ animationDelay: col.streamClass ? `${(rowIndex * 0.1)}s` : '0s' }}
            />
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default RainGrid;
