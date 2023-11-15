import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
// import { Autocomplete }   from '@mui/material';
import {Avatar} from '@mui/material';



const div= styled.div`
border-radius: 10px;
padding:8px;
color:#000;
margin-bottom:8px;
min-height:90px;
margin-left:10px;
margin-right:10px;
background-color: ${(props)=>bgcolorChange(props)};
cursor:pointer;
display:flex;
justify-content:space-between;
flex-direction:column;
`

const TextContent= styled.div``;

const Icons = styled.div`
display: flex;
justify-content:end;
padding:2px;
color:black;
`;
function bgcolorChange(props){
    return props.isDragging
    ? "lightgreen"
    : props.isDraggable
    ? props.isBacklog
    ? '#F2D7D5'
    : "#DCDCDC"
    : props.isBacklog
    ? '#F2D7D5'
    : '#fffada';
}

 function Task(task,index) {
  
    
// console.log(task.task.id);    
   
  return (
    <>
    <Draggable draggableId={`${task.task.id}`} key={task.task.id} index={task.task.id}>

        {(provided, snapshot) =>(
            <div  
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}>

                <div style={{display:'flex', justifyContent:'start', padding:2}}>
                    <span>
                        <small>
                            #{task.task.id}
                        </small>
                    </span>
                </div>

                <div style={{display:'flex', justifyContent:'center', padding:2}}>
                    <TextContent>{task.task.title}</TextContent>
                </div>
                <Icons>
                    <div>
                        <Avatar 
                        src={"https://joesch.moe/api/v1/random?key=" + task.id} />
                    </div>
                </Icons>
                {provided.placeholder}
            </div>
        ) }

    </Draggable>
    </>
  );
}
export default Task;
