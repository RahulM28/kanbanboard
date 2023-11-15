// // import React, { useState } from "react";
// // import ReactDOM from "react-dom";
// // import Board, { moveCard } from "@lourenci/react-kanban";
// // // import "@lourenci/react-kanban/dist/styles.css";
// // // Use your own styles to override the default styles
// // // import "./styles.css";

// // const board = {
// //   columns: [
// //     {
// //       id: 1,
// //       title: "Backlog",
// //       backgroundColor: "#fff",
// //       cards: [
// //         {
// //           id: 1,
// //           title: "Card title 1",
// //           description: "Card content"
// //         },
// //         {
// //           id: 2,
// //           title: "Card title 2",
// //           description: "Card content"
// //         },
// //         {
// //           id: 3,
// //           title: "Card title 3",
// //           description: "Card content"
// //         }
// //       ]
// //     },
// //     {
// //       id: 2,
// //       title: "Doing",
// //       cards: [
// //         {
// //           id: 9,
// //           title: "Card title 9",
// //           description: "Card content"
// //         }
// //       ]
// //     },
// //     {
// //       id: 3,
// //       title: "Q&A",
// //       cards: [
// //         {
// //           id: 10,
// //           title: "Card title 10",
// //           description: "Card content"
// //         },
// //         {
// //           id: 11,
// //           title: "Card title 11",
// //           description: "Card content"
// //         }
// //       ]
// //     },
// //     {
// //       id: 4,
// //       title: "Production",
// //       cards: [
// //         {
// //           id: 12,
// //           title: "Card title 12",
// //           description: "Card content"
// //         },
// //         {
// //           id: 13,
// //           title: "Card title 13",
// //           description: "Card content"
// //         }
// //       ]
// //     }
// //   ]
// // };

// // const items = [];

// // function ControlledBoard() {
// //   // You need to control the state yourself.
// //   const [controlledBoard, setBoard] = useState(board);


// //   function handleCardMove(_card, source, destination) {
// //     const updatedBoard = moveCard(controlledBoard, source, destination);
// //     setBoard(updatedBoard);
// //   }

// //   return (
// //     <Board onCardDragEnd={handleCardMove} disableColumnDrag>
// //       {controlledBoard}
// //     </Board>
// //   );
// // }

// // function UncontrolledBoard() {
// //   return (
// //     <Board
// //       allowRemoveLane
// //       allowRenameColumn
// //       allowRemoveCard
// //       onLaneRemove={console.log}
// //       onCardRemove={console.log}
// //       onLaneRename={console.log}
// //       initialBoard={board}
// //       allowAddCard={{ on: "top" }}
// //       onNewCardConfirm={(draftCard) => ({
// //         id: new Date().getTime(),
// //         ...draftCard
// //       })}
// //       onCardNew={console.log}
// //     />
// //   );
// // }

// // function DummyKanban() {
// //   return (
// //     <>
// //       {items.length && <div />}
      
// //       <h4>Example of an uncontrolled board</h4>
// //       <UncontrolledBoard />
// //       <h4>Example of a controlled board</h4>
// //       <p>Just the card moving is implemented in this demo.</p>
// //       <p>
// //         In this kind of board, you can do whatever you want. We just mirror your
// //         board state.
// //       </p>
// //       <ControlledBoard />
// //     </>
// //   );
// // }
// // export default DummyKanban

// import React, { useState } from 'react';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// const initialData = {
//   column1: {
//     id: 'column1',
//     items: ['Task 1', 'Task 2', 'Task 3'],
//   },
//   column2: {
//     id: 'column2',
//     items: ['Task 4', 'Task 5', 'Task 6'],
//   },
//   column3: {
//     id: 'column3',
//     items: ['Task 7', 'Task 8', 'Task 9'],
//   },
//   column4: {
//     id: 'column4',
//     items: ['Task 10', 'Task 11', 'Task 12'],
//   },
// };

// const DummyKanban = () => {
//   const [columns, setColumns] = useState(initialData);

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) return; // dropped outside a column

//     if (source.droppableId === destination.droppableId) {
//       // Reorder within the same column
//       const column = columns[source.droppableId];
//       const copiedItems = [...column.items];
//       const [removed] = copiedItems.splice(source.index, 1);
//       copiedItems.splice(destination.index, 0, removed);

//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...column,
//           items: copiedItems,
//         },
//       });
//     } else {
//       // Move between columns
//       const sourceColumn = columns[source.droppableId];
//       const destColumn = columns[destination.droppableId];
//       const sourceItems = [...sourceColumn.items];
//       const destItems = [...destColumn.items];
//       const [removed] = sourceItems.splice(source.index, 1);
//       destItems.splice(destination.index, 0, removed);

//       setColumns({
//         ...columns,
//         [source.droppableId]: {
//           ...sourceColumn,
//           items: sourceItems,
//         },
//         [destination.droppableId]: {
//           ...destColumn,
//           items: destItems,
//         },
//       });
//     }
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//         {Object.keys(columns).map((columnId) => {
//           const column = columns[columnId];
//           return (
//             <Droppable key={column.id} droppableId={column.id}>
//               {(provided) => (
//                 <div
//                   ref={provided.innerRef}
//                   {...provided.droppableProps}
//                   style={{
//                     border: '1px solid #ccc',
//                     padding: '8px',
//                     width: '250px',
//                   }}
//                 >
//                   <h3>{column.id}</h3>
//                   {column.items.map((item, index) => (
//                     <Draggable key={item} draggableId={item} index={index}>
//                       {(provided) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           style={{
//                             border: '1px solid #ddd',
//                             margin: '8px 0',
//                             padding: '8px',
//                             background: 'white',
//                           }}
//                         >
//                           {item}
//                         </div>
//                       )}
//                     </Draggable>
//                   ))}
//                 </div>
//               )}
//             </Droppable>
//           );
//         })}
//       </div>
//     </DragDropContext>
//   );
// };

// export default DummyKanban;



// 2nd execution

// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const initialData = {
//   column1: {
//     id: 'column1',
//     title: 'To Do',
//     taskIds: ['task1', 'task2', 'task3'],
//   },
//   column2: {
//     id: 'column2',
//     title: 'In Progress',
//     taskIds: [ ],
//   },
//   column3: {
//     id: 'column3',
//     title: 'Completed',
//     taskIds: [],
//   },
//   column4: {
//     id: 'column4',
//     title: 'Backlog',
//     taskIds: [],
//   },
// };

// const initialTasks = {
//   task1: { id: 'task1', content: 'Task 1' },
//   task2: { id: 'task2', content: 'Task 2' },
//   task3: { id: 'task3', content: 'Task 3' },

// };

// function KanbanBoard() {
//   const [data, setData] = useState(initialData);
//   const [tasks, setTasks] = useState(initialTasks);

//   const onDragEnd = (result) => {
//     const { destination, source, draggableId } = result;

//     if (!destination) {
//       return; // Dropped outside of a droppable area
//     }

//     if (destination.droppableId === source.droppableId && destination.index === source.index) {
//       return; // Dropped in the same location
//     }

//     // Reorder tasks within the same column
//     if (destination.droppableId === source.droppableId) {
//       const column = data[source.droppableId];
//       const newTaskIds = Array.from(column.taskIds);
//       newTaskIds.splice(source.index, 1);
//       newTaskIds.splice(destination.index, 0, draggableId);

//       const newColumn = { ...column, taskIds: newTaskIds };
//       const newData = { ...data, [newColumn.id]: newColumn };
//       setData(newData);
//     } else {
//       // Move tasks between columns
//       const sourceColumn = data[source.droppableId];
//       const destinationColumn = data[destination.droppableId];
//       const sourceTaskIds = Array.from(sourceColumn.taskIds);
//       const destinationTaskIds = Array.from(destinationColumn.taskIds);

//       sourceTaskIds.splice(source.index, 1);
//       destinationTaskIds.splice(destination.index, 0, draggableId);

//       const newSourceColumn = { ...sourceColumn, taskIds: sourceTaskIds };
//       const newDestinationColumn = { ...destinationColumn, taskIds: destinationTaskIds };

//       const newData = {
//         ...data,
//         [newSourceColumn.id]: newSourceColumn,
//         [newDestinationColumn.id]: newDestinationColumn,
//       };

//       setData(newData);
//     }
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       {Object.values(data).map((column) => (
//         <div key={column.id} style={{ display: 'inline-block', margin: '8px' }}>
//           <h2>{column.title}</h2>
//           <Droppable droppableId={column.id} type="task" >
//             {(provided) => (
//               <div
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 style={{
//                   background: 'lightgrey',
//                   padding: '8px',
//                   width: '250px',
//                   height:'200px'
//                 }}
//               >
//                 {column.taskIds.map((taskId, index) => {
//                   const task = tasks[taskId];
//                   return (
//                     <Draggable key={task.id} draggableId={task.id} index={index}>
//                       {(provided, snapshot) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           style={{
//                             userSelect: 'none',
//                             padding: '8px',
//                             margin: '8px',
//                             minHeight: '50px',
//                             backgroundColor: snapshot.isDragging ? 'lightgreen' : 'white',
//                             ...provided.draggableProps.style,
//                           }}
//                         >
//                           {task.content}
//                         </div>
//                       )}
//                     </Draggable>
//                   );
//                 })}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         </div>
//       ))}
//     </DragDropContext>
//   );
// }

// export default KanbanBoard;




// 3rd execution


import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const initialData = {
  todo: [{ id: 'task-1', content: 'Task 1' }],
  inProgress: [],
  testing: [],
  done: [],
};

function KanbanBoard() {
  const [tasks, setTasks] = useState(initialData);
  const [newTask, setNewTask] = useState('');

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId === destination.droppableId) {
      // Reorder within the same column
      const column = [...tasks[source.droppableId]];
      column.splice(source.index, 1);
      column.splice(destination.index, 0, tasks[draggableId]);
      setTasks({ ...tasks, [source.droppableId]: column });
    } else {
      // Move between columns
      const sourceColumn = [...tasks[source.droppableId]];
      const destinationColumn = [...tasks[destination.droppableId]];

      const task = sourceColumn.find((task) => task.id === draggableId);

      sourceColumn.splice(source.index, 1);
      destinationColumn.splice(destination.index, 0, task);

      setTasks({
        ...tasks,
        [source.droppableId]: sourceColumn,
        [destination.droppableId]: destinationColumn,
      });
    }
  };

  const handleNewTask = () => {
    if (newTask.trim() === '') return;
    const newTaskData = { id: `task-${Date.now()}`, content: newTask };
    setTasks({ ...tasks, todo: [...tasks.todo, newTaskData] });
    setNewTask('');
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="kanban-board">
        {Object.keys(tasks).map((columnId) => (
          <div key={columnId} className="column">
            <h2>{columnId}</h2>
            <Droppable droppableId={columnId}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`task-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
                >
                  {tasks[columnId].map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`task ${snapshot.isDragging ? 'dragging' : ''}`}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
      <div className="new-task">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleNewTask}>+</button>
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;

