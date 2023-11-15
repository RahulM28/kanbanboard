// import React, { useState } from 'react';

// const Card = ({ card, updateCardText, removeCard }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [text, setText] = useState(card.text);

//   const handleSave = () => {
//     updateCardText(card.id, text);
//     setIsEditing(false);
//   };

//   return (
//     <div>
//       {isEditing ? (
//         <div>
//           <input
//             type="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <button onClick={handleSave}>Save</button>
//         </div>
//       ) : (
//         <div>
//           <span onClick={() => setIsEditing(true)}>{text}</span>
//           <button onClick={() => removeCard(card.id)}>Remove</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;


// trial 2


// Card.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ card, index }) => {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card"
        >
          {card.content}
        </div>
      )}
    </Draggable>
  );
};

export default Card;

