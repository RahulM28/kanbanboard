import React, { useState, useRef } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import  DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const initialItems = [
  { id: uuid(), content: 'First task' },
  { id: uuid(), content: 'Second task' },
  { id: uuid(), content: 'Third task' },
  { id: uuid(), content: 'Fourth task' },
  { id: uuid(), content: 'Fifth task' }
];

const initialColumns = {
  requested: {
    name: 'Requested',
    items: initialItems, 
    
  },
  
//   todo: {
//     name: 'To do',
//     items: [],
//   },
//   inProgress: {
//     name: 'In Progress',
//     items: [],
//   },
//   done: {
//     name: 'Done',
//     items: [],
//   },
};


const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  //edited code
  const sourceColumnId = result.source.droppableId;
  const destinationColumnId = result.destination.droppableId;
  const sourceIndex = result.source.index;
  const destinationIndex = result.destination.index;

  // Create a deep copy of the columns
  const updatedColumns = { ...columns };
  const sourceColumn = { ...updatedColumns[sourceColumnId] };
  const destinationColumn = { ...updatedColumns[destinationColumnId] };

  // Remove the dragged column from the source
  const [movedColumn] = sourceColumn.items.splice(sourceIndex, 1);

  // Insert the moved column at the destination
  destinationColumn.items.splice(destinationIndex, 0, movedColumn);

  // Update the columns state
  updatedColumns[sourceColumnId] = sourceColumn;
  updatedColumns[destinationColumnId] = destinationColumn;
  setColumns(updatedColumns);
};


//   const { source, destination } = result;

//   if (source.droppableId !== destination.droppableId) {
//     const sourceColumn = columns[source.droppableId];
//     const destColumn = columns[destination.droppableId];
//     const sourceItems = [...sourceColumn.items];
//     const destItems = [...destColumn.items];
//     const [removed] = sourceItems.splice(source.index, 1);
//     destItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems,
//       },
//       [destination.droppableId]: {
//         ...destColumn,
//         items: destItems,
//       },
//     });
//   } else {
//     const column = columns[source.droppableId];
//     const copiedItems = [...column.items];
//     const [removed] = copiedItems.splice(source.index, 1);
//     copiedItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...column,
//         items: copiedItems,
//       },
//     });
//   }
// };

function KanbanDummy2() {
  const [columns, setColumns] = useState(initialColumns);
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const newColumnNameRef = useRef(null);
  const [editingColumnId, setEditingColumnId] = useState(null);
  const [editedColumnName, setEditedColumnName] = useState('');
  const[showIcon,setShowIcon]=useState(false);

  const addColumn = () => {
    setIsAddingColumn(true);
    setEditingColumnId(null); // Ensure no column is in an editing state
  };

  const saveNewColumn = () => {
    const newColumnName = newColumnNameRef.current.value;
    if (newColumnName.trim() === '') {
      // Prevent adding a column with an empty name
      setIsAddingColumn(false);
      return;
    }

//   const addColumnAndChangeName = () => {
    const newColumnId = uuid();
    setColumns({
      ...columns,
      [newColumnId]: {
        name: newColumnName,
        items: [],
      },
    });
    setIsAddingColumn(false);
};
const startEditColumnName = (columnId, name) => {
    setEditingColumnId(columnId);
    setEditedColumnName(name);
  };

  const saveEditedColumnName = (columnId) => {
    if (editedColumnName.trim() === '') {
      // Prevent saving an empty name
      setEditingColumnId(null);
      return;
    }
    setColumns({
        ...columns,
        [columnId]: {
          ...columns[columnId],
          name: editedColumnName,
        },
      });
  
      setEditingColumnId(null);
    };
    const deleteColumn = (columnId) => {
        const updatedColumns = { ...columns };
        
       if(Object.keys(updatedColumns).length!==1){
        delete updatedColumns[columnId];
        setColumns(updatedColumns);
       }
       else{
            alert("you have reached maximum column removal");
       }
         
      };

   
  
  
//   const handleColumnNameChange = (columnId, newName) => {
//     setColumns({
//       ...columns,
//       [columnId]: {
//         ...columns[columnId],
//         name: newName,
//       },
//     });
//   };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%', backgroundColor:'whitesmoke' }}>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: 'flex',
                justifyContent:'space-between'
              }}
              key={columnId}
            > 
                {/* <input
                type="text"
                value={column.name}
                onChange={(e) => handleColumnNameChange(columnId, e.target.value)}
              /> */}
                      
                {isAddingColumn && Object.keys(columns).length - 1 === index ? (
                <div>
                  <input type="text" ref={newColumnNameRef} />
                  <button onClick={saveNewColumn}>Save</button>
                </div>
              ) : (
                <div>
                {editingColumnId === columnId ? (
                  <div>
                    <input
                      type="text"
                      value={editedColumnName}
                      onChange={(e) => setEditedColumnName(e.target.value)}
                      onBlur={() => saveEditedColumnName(columnId)}
                    />
                  </div>
                ) : (
                  <h2 style={{wordWrap:'break-word',width:'250px'}}>{column.name}</h2>
                )}
                <button onClick={() => startEditColumnName(columnId, column.name)} style={{width:'30px',height:'30px'}}><EditIcon/></button>
                <button onClick={() => deleteColumn(columnId)} style={{width:'30px',height:'30px', }}> <DeleteOutlineIcon />  </button> 
              </div>
            )}
              {/* <h2>{column.name}</h2> */}
              <div style={{
                margin: '8px',maxHeight: '400px', // Set the maximum height for the content
                  overflow: 'auto',  //Enable scrolling for overflowing content
                  boxShadow: "10px 10px 20px #ccc",
                  ":hover": { boxShadow: "20px 20px 40px #ccc" },
                  borderRadius:'10px',
                  msOverflowStyle: 'none', /*for internet explorer, edge */
                  scrollbarWidth: 'none' , /*for firefox */
                  overflowY: 'scroll',
                  
              }}
                   > 
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? 'lightblue'
                            : 'lightgrey',
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: 'none',
                                      padding: 16,
                                      margin: '0 0 8px 0',
                                      minHeight: '50px',
                                      backgroundColor: snapshot.isDragging
                                        ? '#263B4A'
                                        : '#456C86',
                                      color: 'white',
                                      ...provided.draggableProps.style,
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
      <button onClick={addColumn} style={{height:'30px', marginTop:'20px'}}><AddIcon /></button>
    </div>
  );
}

export default KanbanDummy2;
