// import React, { useState } from 'react';
// import KanbanColumn from './KanbanColumn';

// const initialData = [
//   {
//     id: 1,
//     title: 'To Do',
//     cards: [{ id: 1, text: 'Task 1' }],
//   },
// ];

// const KanbanDummy = () => {
//   const [columns, setColumns] = useState(initialData);

//   const addColumn = () => {
//     const newColumnId = columns.length + 1;
//     const newColumn = {
//       id: newColumnId,
//       title: 'New Column',
//       cards: [],
//     };
//     setColumns([...columns, newColumn]);
//   };

//   const addCard = (columnId, text) => {
//     const updatedColumns = columns.map((column) => {
//       if (column.id === columnId) {
//         column.cards.push({ id: Date.now(), text });
//       }
//       return column;
//     });
//     setColumns(updatedColumns);
//   };

//   const updateCardText = (cardId, text) => {
//     const updatedColumns = columns.map((column) => {
//       column.cards = column.cards.map((card) => {
//         if (card.id === cardId) {
//           card.text = text;
//         }
//         return card;
//       });
//       return column;
//     });
//     setColumns(updatedColumns);
//   };

//   const removeCard = (cardId) => {
//     const updatedColumns = columns.map((column) => {
//       column.cards = column.cards.filter((card) => card.id !== cardId);
//       return column;
//     });
//     setColumns(updatedColumns);
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const { source, destination, draggableId } = result;

//     if (
//       source.droppableId === destination.droppableId &&
//       source.index === destination.index
//     ) {
//       return;
//     }

//     const updatedColumns = [...columns];
//     const sourceColumn = updatedColumns.find(
//       (column) => column.id === parseInt(source.droppableId)
//     );
//     const destinationColumn = updatedColumns.find(
//       (column) => column.id === parseInt(destination.droppableId)
//     );
//     const [movedCard] = sourceColumn.cards.splice(source.index, 1);
//     destinationColumn.cards.splice(destination.index, 0, movedCard);

//     setColumns(updatedColumns);
//   };

//   return (
//     <div>
//       <button onClick={addColumn}>Add Column</button>
//       <div>
//         {columns.map((column) => (
//           <KanbanColumn
//             key={column.id}
//             column={column}
//             addCard={addCard}
//             updateCardText={updateCardText}
//             removeCard={removeCard}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanbanDummy;


//trial 2

// import React, { useState } from 'react';
// import { DndProvider, useDrag, useDrop } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import { Box, Button, Paper, TextField, Typography, IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';

// function Column({ title, cards, onCardDrop }) {
//   const [, ref] = useDrop({
//     accept: 'CARD',
//     drop: (draggedCard) => {
//       onCardDrop(title, draggedCard);
//     },
//   });

//   return (
//     <Paper elevation={3} sx={{ width: 300, height: 400, borderRadius: 8, overflow: 'hidden' }} ref={ref}>
//       <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 2 }}>{title}</Typography>
//       <Box sx={{ padding: 2, overflowY: 'auto', height: 'calc(100% - 48px)' }}>
//         {cards.map((card, index) => (
//           <Card key={card.id} card={card} index={index} />
//         ))}
//       </Box>
//       <TextField
//         label="Add Card"
//         variant="outlined"
//         fullWidth
//         sx={{ marginTop: 2 }}
//       />
//     </Paper>
//   );
// }

// function Card({ card, index }) {
//   const [, ref] = useDrag({
//     type: 'CARD',
//     item: { id: card.id, index },
//   });

//   return (
//     <Paper elevation={2} sx={{ p: 2, mt: 2, borderRadius: 4, '&:hover': { transform: 'translateY(-5px)', cursor: 'grab' } }} ref={ref}>
//       {card.text}
//     </Paper>
//   );
// }

// function KanbanDummy() {
//   const [columns, setColumns] = useState([
//     { title: 'To Do', cards: [] },
//     { title: 'In Progress', cards: [] },
//     { title: 'Done', cards: [] },
//   ]);

//   const addColumn = () => {
//     const newColumn = prompt('Enter column title:');
//     if (newColumn) {
//       setColumns([...columns, { title: newColumn, cards: [] }]);
//     }
//   };

//   const addCard = (columnTitle, text) => {
//     setColumns((prevColumns) => {
//       const updatedColumns = [...prevColumns];
//       const columnIndex = updatedColumns.findIndex((col) => col.title === columnTitle);
//       updatedColumns[columnIndex].cards.push({ id: Date.now(), text });
//       return updatedColumns;
//     });
//   };

// //   const onCardDrop = (targetColumnTitle, card) {
// //     // Implement this function to handle card dropping between columns.
// //   };
// const onCardDrop = (targetColumnTitle, droppedCard) => {
//     setColumns((prevColumns) => {
//       const updatedColumns = [...prevColumns];
//       const sourceColumn = updatedColumns.find((col) => col.cards.some((card) => card.id === droppedCard.id));
//       const targetColumn = updatedColumns.find((col) => col.title === targetColumnTitle);
  
//       if (sourceColumn && targetColumn) {
//         const sourceIndex = sourceColumn.cards.findIndex((card) => card.id === droppedCard.id);
//         if (sourceIndex !== -1) {
//           // Remove the card from the source column
//           sourceColumn.cards.splice(sourceIndex, 1);
  
//           // Add the card to the target column
//           targetColumn.cards.push(droppedCard);
  
//           // Update the state with the new column arrangement
//           return updatedColumns;
//         }
//       }
  
//       return prevColumns; // Return the previous state if the drop was unsuccessful
//     });
//   };
  
//   return (
//     <Box sx={{ display: 'flex', gap: 2 }}>
//       {columns.map((column) => (
//         <Column key={column.title} title={column.title} cards={column.cards} onCardDrop={onCardDrop} />
//       ))}
//       <IconButton onClick={addColumn} sx={{ marginTop: 2 }}>
//         <AddIcon />
//       </IconButton>
//     </Box>
//   );
// }

// export default function App() {
//   return (
//     <DndProvider backend={HTML5Backend}>
//       <KanbanDummy />
//     </DndProvider>
//   );
// }




// trial 3


// KanbanBoard.js
// import React, { useState } from 'react';
// import Column2 from './Column2';

// const KanbanDummy = () => {
//   const [columns, setColumns] = useState([
//     { id: 'column-1', title: 'To Do', cards: [] },
//     // Add more initial columns here
//   ]);

//   const addColumn = (title) => {
//     const newColumn = { id: `column-${columns.length + 1}`, title, cards: [] };
//     setColumns([...columns, newColumn]);
//   };

//   return (
//     <div className="kanban-board">
//       <div className="add-column-button">
//         {/* Add button to add a new column */}
//         <button onClick={() => addColumn('New Column')}>+ Add Column</button>
//       </div>
//       <div className="columns">
//         {columns.map((column) => (
//           <Column2 key={column.id} column={column} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanbanDummy;


//testing last file

import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import v4 from "uuid";
import { v4 as uuid } from 'uuid';
const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" }
];

const columnsFromBackend = { 
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

function KanbanDummy() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          padding: 4,
                          width: 250,
                          minHeight: 500
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default KanbanDummy;

//last testing

// import React, { useState } from 'react';
// import { Grid, Button, Card, CardContent, IconButton } from '@mui/material';
// import { AddCircleOutline } from '@mui/icons-material';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// function KanbanDummy() {
//   const [columns, setColumns] = useState([
//     // First static column
//     {
//       id: 'column-1',
//       title: 'Column 1',
//       cards: [
//         { id: 'card-1', content: 'Task 1' },
//         // Add more cards here
//       ],
//     },
//   ]);

//   const handleAddColumn = () => {
//     // Add a new column to the state
//     const newColumn = {
//       id: `column-${columns.length + 1}`,
//       title: `Column ${columns.length + 1}`,
//       cards: [],
//     };
//     setColumns([...columns, newColumn]);
//   };

//   // Implement functions to handle drag-and-drop with react-beautiful-dnd

//   return (
//     <DragDropContext onDragEnd={/* Handle drag-and-drop here */}>
//       <Grid container spacing={2}>
//         {columns.map((column, index) => (
//           <Droppable droppableId={column.id} key={column.id}>
//             {(provided) => (
//               <Grid item xs={3} key={column.id}>
//                 <Card>
//                   <CardContent>
//                     <h2>{column.title}</h2>
//                     {column.cards.map((card, cardIndex) => (
//                       <Draggable
//                         draggableId={card.id}
//                         index={cardIndex}
//                         key={card.id}
//                       >
//                         {(provided) => (
//                           <Card
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                           >
//                             <CardContent>{card.content}</CardContent>
//                           </Card>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </CardContent>
//                 </Card>
//               </Grid>
//             )}
//           </Droppable>
//         ))}
//         <Grid item xs={3}>
//           <Card>
//             <CardContent>
//               <IconButton onClick={handleAddColumn}>
//                 <AddCircleOutline />
//               </IconButton>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </DragDropContext>
//   );
// }

// export default KanbanDummy;

