
import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";

const App = () => {
const tasks:string[]=[
    "Buy groceries",
    "Walk the dog",
    "Read a book",
    "Write a blog post",
    "Do the laundry"
  ];
  const [list,setList]=useState(tasks);
  const [newList,setNewList]=useState("");// for adding task
  const [filter,filteredList]=useState([]);//for filtering


  const addTask=()=>{
    
    if(newList.length>0){
      setList([...list,newList]);
      setNewList('');
      
    }
  }

  const removeTask =(cardIndex: number) => {
    console.log("callback is called");
  setList((prevList) => prevList.filter((item, index) => index !== cardIndex));
   
   
  } 



   
  
  useEffect(()=>{
 console.log("useeffect is called");
  },[list])
  const handleSearch=useCallback((text:string)=>{
    const lowercasedtasks = text.toLowerCase();
    const newFilteredTasks = list.filter(task =>
      task.toLowerCase().includes(lowercasedtasks) 
    );
    filteredList(newFilteredTasks);
    console.log("usecallback")
  },[list])


//   setList((prevTasks) => {
//     const updatedTasks = [...prevTasks]; // Create a copy of the tasks array
//     updatedTasks.splice(cardIndex, 1); // Remove the item at the specified index
//     return updatedTasks;
//   });
// };
  return (
    <>
      <Navbar addTask={addTask} setNewList={setNewList}  handleSearch={handleSearch}/>
      
      {(filter.length>0?filter:list).map((item,index)=>(<Tasks key={index} items={item}
       removeTask={removeTask} index={index} ></Tasks>)) }
      
    </>
  );
};

export default App;

