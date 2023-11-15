// context of our application
import React, { useState, useEffect } from 'react';
import {DragDropContext } from 'react-beautiful-dnd'
import Column from './Column';



const KanbanBoard = () => {
    const [completed, setCompleted] =useState([])
    const [incomplete, setIncomplete] = useState([])

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        setCompleted(json.filter((task)=>task.completed));
        setIncomplete(json.filter((task)=>!task.completed))
        
      });
    },  []);
    // console.log("incompleted", incomplete);
    // console.log("completed", completed);
    function findItemById(id, array){
      return array.find((item)=>item.id == id);
    }
    function removeItemById(id, array){
      return array.filter((item)=>item.id != id);
    }
    
    const handleDragEnd = (result)=>{
      console.log("result", result);
      const { destination, source, draggableId } = result ;
      if( source.droppableId === destination.droppableId) return;
      
      let newCompleted = completed.slice();
      let newIncomplete = incomplete.slice();
      // console.log(newCompleted);
      // console.log(newIncomplete);

      // remove the item from the source array
      // if(source.droppableId === "2"){
      //   setCompleted(removeItemById(draggableId, completed));
      // } else{
      //   setIncomplete(removeItemById(draggableId, incomplete));
      // }
      newCompleted = removeItemById(draggableId, completed);
    // } else {
      newIncomplete = removeItemById(draggableId, incomplete);
    // }
  


      // get item from array

      const task = findItemById(draggableId,[...incomplete, ...completed]);

      // add item to the destination column
      if (destination.droppableId !== null || destination.droppableId !== undefined){
      //   setCompleted([{...task, completed: !task.completed}, ...completed]);
      // } else{
      //   setIncomplete([{...task, completed: !task.completed}, ...incomplete]);
      // }
      // console.log(task);
      newCompleted = [{ ...task, completed: !task.completed }, ...newCompleted];
    } else {
      newIncomplete = [{ ...task, completed: !task.completed }, ...newIncomplete];
    }
      // Update the state after all operations
      // console.log(newCompleted);
      // console.log(newIncomplete);

    setCompleted(newCompleted);
    setIncomplete(newIncomplete);
    // console.log(completed);
    // console.log(incomplete);
    };


    
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
        <h1 style={{textAlign:'center'}}>Progress Board</h1>

        <div style={{display:'flex',
          justifyContent:'center',
          alignItems:'center',
          textAlign:'center',
          flexDirection:'row',
          gap:"10px"}}>

          <Column title={"To Do"} tasks={incomplete} id={"1"}  />  
          <Column title={"In Process"} tasks={completed} id={"2"} />
          <Column title={"Done"} tasks={completed} id={"3"} />

        </div>
    </DragDropContext>
  )
}

export default KanbanBoard
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// // fake data generator
// const getItems = count =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
      
//     id: `item-${`k`}`,
//     content:` item ${`k`}`
//   }));
 
// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);

//   return result;
// };

// const grid = 8;

// const getItemStyle = (isDragging, draggableStyle) => ({
//   // some basic styles to make the items look a bit nicer
//   userSelect: "none",
//   padding: grid * 2,
//   margin: `0 0 ${`grid`}px 0`,

//   // change background colour if dragging
//   background: isDragging ? "lightgreen" : "grey",

//   // styles we need to apply on draggables
//   ...draggableStyle
// });

// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey",
//   padding: grid,
//   width: 250
// });

// class KanbanBoard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: getItems(10)
//     };
//     this.onDragEnd = this.onDragEnd.bind(this);
//   }

//   onDragEnd(result) {
//     // dropped outside the list
//     if (!result.destination) {
//       return;
//     }

//     const items = reorder(
//       this.state.items,
//       result.source.index,
//       result.destination.index
//     );

//     this.setState({
//       items
//     });
//   }

//   // Normally you would want to split things out into separate components.
//   // But in this example everything is just done in one place for simplicity
//   render() {
//     return (
//       <>
//           <DragDropContext onDragEnd={this.onDragEnd}>
//         <Droppable droppableId="droppable">
//           {(provided, snapshot) => (
//             <div
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//               style={getListStyle(snapshot.isDraggingOver)}
//             >
//               {this.state.items.map((item, index) => (
//                 <Draggable key={item.id} draggableId={item.id} index={index}>
//                   {(provided, snapshot) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={getItemStyle(
//                         snapshot.isDragging,
//                         provided.draggableProps.style
//                       )}
//                     >
//                       {item.content}
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
      

        
//       </DragDropContext>
        
//       </>
    
//     );
//   }
// }
// export default KanbanBoard;
// Put the thing into the DOM!
// ReactDOM.render(<App />, document.getElementById("root"));