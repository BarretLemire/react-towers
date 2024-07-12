import React from 'react';
import { useDraggable } from '@dnd-kit/core';

function Disk({ disk, towerIndex }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: `disk-${towerIndex}-${disk}`,
        data: { towerIndex }
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        width: `${20 + disk * 10}%`,
    };

    return (
        <div
            ref={setNodeRef}
            className={`disk disk-${disk}`}
            style={style}
            {...listeners}
            {...attributes}
        >
            {disk}
        </div>
    );
}

export default Disk;



