// import React, { useState } from 'react';
// import Card from './Card';

// const KanbanColumn = ({ column, addCard, updateCardText, removeCard }) => {
//   const [newCardText, setNewCardText] = useState('');

//   const handleAddCard = () => {
//     if (newCardText) {
//       addCard(column.id, newCardText);
//       setNewCardText('');
//     }
//   };

//   return (
//     <div>
//       <h3>{column.title}</h3>
//       <div>
//         {column.cards.map((card) => (
//           <Card
//             key={card.id}
//             card={card}
//             updateCardText={updateCardText}
//             removeCard={removeCard}
//           />
//         ))}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter card text"
//           value={newCardText}
//           onChange={(e) => setNewCardText(e.target.value)}
//         />
//         <button onClick={handleAddCard}>Add Card</button>
//       </div>
//     </div>
//   );
// };

// export default KanbanColumn;

//trial2

// Column.js
import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card';

const Column2 = ({ column }) => {
  return (
    <Draggable draggableId={column.id} index={column.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="column"
        >
          <h3>{column.title}</h3>
          <Droppable droppableId={column.id} type="CARD">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={`cards ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
              >
                {column.cards.map((card, index) => (
                  <Card key={card.id} card={card} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column2;

