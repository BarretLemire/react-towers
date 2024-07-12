import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import Disk from './Disk';

function Tower({ index, disks }) {
    const { setNodeRef } = useDroppable({
        id: `tower-${index}`,
        data: { towerIndex: index }
    });


  return (
    <div ref={setNodeRef} className="tower">
      {disks.map((disk, diskIndex) => (
        <Disk key={diskIndex} disk={disk} towerIndex={index} />      
        ))}
    </div>
  );
}

export default Tower;
